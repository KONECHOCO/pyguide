import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Home } from './components/Home'
import { CategoryView, CommandView, Missing, SearchView } from './components/CommandView'
import { commandById, commands, searchCommands } from './data'
import { locales, ui } from './i18n'
import { initializeMonetization, showInterstitialAd } from './monetization'
import type { Locale, Route } from './types'

const LANG_KEY = 'pyguide-lang'
const LEARN_KEY = 'pyguide-learned'

function parseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, '')
  const parts = h.split('/').filter(Boolean)
  if (parts[0] === 'cat' && parts[1]) return { page: 'category', id: parts[1] }
  if (parts[0] === 'cmd' && parts[1]) return { page: 'command', id: parts[1] }
  return { page: 'home' }
}

function writeHash(route: Route) {
  if (route.page === 'home') window.location.hash = '#/'
  if (route.page === 'category') window.location.hash = `#/cat/${route.id}`
  if (route.page === 'command') window.location.hash = `#/cmd/${route.id}`
}

function loadLang(): Locale {
  const raw = localStorage.getItem(LANG_KEY)
  if (raw && locales.some((l) => l.id === raw)) return raw as Locale
  const nav = navigator.language.slice(0, 2)
  if (nav === 'it' || nav === 'en' || nav === 'es' || nav === 'fr') return nav
  return 'it'
}

function loadLearned(): Set<string> {
  try {
    const raw = JSON.parse(localStorage.getItem(LEARN_KEY) ?? '[]') as unknown
    return new Set(Array.isArray(raw) ? raw.filter((x) => typeof x === 'string') : [])
  } catch {
    return new Set()
  }
}

export default function App() {
  const [lang, setLang] = useState<Locale>(loadLang)
  const [query, setQuery] = useState('')
  const [route, setRoute] = useState<Route>(parseHash)
  const [menuOpen, setMenuOpen] = useState(false)
  const [learned, setLearned] = useState<Set<string>>(loadLearned)

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    if (!window.location.hash) window.location.hash = '#/'
    void initializeMonetization()
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang)
    document.documentElement.lang = lang
    document.title = `${ui.appName[lang]} — ${ui.tagline[lang]}`
  }, [lang])

  useEffect(() => {
    localStorage.setItem(LEARN_KEY, JSON.stringify([...learned]))
  }, [learned])

  const go = (next: Route) => {
    writeHash(next)
    setRoute(next)
    setQuery('')
    setMenuOpen(false)
    window.scrollTo(0, 0)
    if (next.page === 'command') {
      const count = Number(localStorage.getItem('pyguide-command-opens') ?? '0') + 1
      localStorage.setItem('pyguide-command-opens', String(count))
      if (count % 5 === 0) void showInterstitialAd()
    }
  }

  const results = useMemo(() => searchCommands(query, lang), [query, lang])

  function toggleLearned(id: string) {
    setLearned((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const cmd = route.page === 'command' ? commandById.get(route.id) : undefined

  return (
    <div className="app">
      <Header
        lang={lang}
        query={query}
        onQuery={setQuery}
        onHome={() => go({ page: 'home' })}
        onMenu={() => setMenuOpen((v) => !v)}
        menuOpen={menuOpen}
        onLang={setLang}
      />
      <div className="shell">
        <Sidebar
          lang={lang}
          route={route}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onHome={() => go({ page: 'home' })}
          onCategory={(id) => go({ page: 'category', id })}
          onCommand={(id) => go({ page: 'command', id })}
        />
        {menuOpen && <button type="button" className="scrim" aria-label={ui.closeMenu[lang]} onClick={() => setMenuOpen(false)} />}
        <main>
          {query.trim() ? (
            <SearchView query={query.trim()} results={results} lang={lang} onCommand={(id) => go({ page: 'command', id })} />
          ) : route.page === 'home' ? (
            <Home
              lang={lang}
              learned={learned}
              onCategory={(id) => go({ page: 'category', id })}
              onCommand={(id) => go({ page: 'command', id })}
            />
          ) : route.page === 'category' ? (
            <CategoryView
              categoryId={route.id}
              lang={lang}
              learned={learned}
              onCommand={(id) => go({ page: 'command', id })}
            />
          ) : cmd ? (
            <CommandView
              cmd={cmd}
              lang={lang}
              learned={learned.has(cmd.id)}
              onToggleLearned={() => toggleLearned(cmd.id)}
              onCommand={(id) => go({ page: 'command', id })}
              onCategory={(id) => go({ page: 'category', id })}
            />
          ) : (
            <Missing lang={lang} onHome={() => go({ page: 'home' })} />
          )}
          <p className="foot">
            {ui.footer[lang]} · {commands.length} {ui.commands[lang]}
          </p>
        </main>
      </div>
    </div>
  )
}
