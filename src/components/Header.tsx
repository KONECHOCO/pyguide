import { PythonLogo } from './PythonLogo'
import { categories, commands } from '../data'
import { ui } from '../i18n'
import type { Locale } from '../types'

type Props = {
  lang: Locale
  query: string
  onQuery: (value: string) => void
  onHome: () => void
  onMenu: () => void
  menuOpen: boolean
  onLang: (lang: Locale) => void
}

export function Header({ lang, query, onQuery, onHome, onMenu, menuOpen, onLang }: Props) {
  return (
    <header className="topbar">
      <button type="button" className="menu-btn" onClick={onMenu} aria-label={menuOpen ? ui.closeMenu[lang] : ui.openMenu[lang]}>
        <span />
        <span />
        <span />
      </button>
      <button type="button" className="brand" onClick={onHome}>
        <PythonLogo size={34} />
        <span>
          <strong>{ui.appName[lang]}</strong>
          <small>{ui.tagline[lang]}</small>
        </span>
      </button>
      <label className="search">
        <span className="sr-only">{ui.search[lang]}</span>
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={ui.search[lang]}
          type="search"
          autoComplete="off"
        />
        <kbd>{commands.length}</kbd>
      </label>
      <div className="langs" role="group" aria-label={ui.language[lang]}>
        {(['it', 'en', 'es', 'fr'] as const).map((id) => (
          <button key={id} type="button" className={id === lang ? 'on' : ''} onClick={() => onLang(id)}>
            {id.toUpperCase()}
          </button>
        ))}
      </div>
      <span className="ver">{ui.pythonVersion[lang]}</span>
      <span className="cat-count">
        {categories.length} {ui.categories[lang]}
      </span>
    </header>
  )
}
