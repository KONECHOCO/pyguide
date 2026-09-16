import { categories, commandById, commandsInCategory, commandsInSubcategory, relatedCommands } from '../data'
import { ui } from '../i18n'
import type { Command, Locale } from '../types'
import { CodeBlock } from './CodeBlock'

type CommandProps = {
  cmd: Command
  lang: Locale
  learned: boolean
  onToggleLearned: () => void
  onCommand: (id: string) => void
  onCategory: (id: string) => void
}

export function CommandView({ cmd, lang, learned, onToggleLearned, onCommand, onCategory }: CommandProps) {
  const cat = categories.find((c) => c.id === cmd.category)
  const sub = cat?.subcategories.find((s) => s.id === cmd.subcategory)
  const related = relatedCommands(cmd)

  return (
    <article className="cmd-page">
      <p className="crumbs">
        <button type="button" onClick={() => onCategory(cmd.category)}>
          {cat?.title[lang]}
        </button>
        <span>/</span>
        <span>{sub?.title[lang]}</span>
      </p>
      <header className="cmd-head">
        <div>
          <h1>{cmd.name}</h1>
          <p className="sig">
            <span>{ui.signature[lang]}</span>
            {cmd.signature}
          </p>
        </div>
        <button type="button" className={`learn ${learned ? 'on' : ''}`} onClick={onToggleLearned}>
          {learned ? ui.learned[lang] : ui.markLearned[lang]}
        </button>
      </header>
      <p className="desc">{cmd.description[lang]}</p>
      {cmd.examples.map((ex, i) => (
        <section key={i} className="example">
          <h2>
            {ui.example[lang]} {cmd.examples.length > 1 ? i + 1 : ''}
          </h2>
          <div className="pair">
            <CodeBlock code={ex.code} lang={lang} />
            <CodeBlock code={ex.result} lang={lang} result />
          </div>
        </section>
      ))}
      {cmd.tip && (
        <aside className="tip">
          <strong>{ui.tip[lang]}</strong>
          <p>{cmd.tip[lang]}</p>
        </aside>
      )}
      {related.length > 0 && (
        <footer className="related">
          <h2>{ui.related[lang]}</h2>
          <ul>
            {related.map((r) => (
              <li key={r.id}>
                <button type="button" onClick={() => onCommand(r.id)}>
                  <span>{r.name}</span>
                  <small>{r.description[lang]}</small>
                </button>
              </li>
            ))}
          </ul>
        </footer>
      )}
    </article>
  )
}

type CategoryProps = {
  categoryId: string
  lang: Locale
  learned: Set<string>
  onCommand: (id: string) => void
}

export function CategoryView({ categoryId, lang, learned, onCommand }: CategoryProps) {
  const cat = categories.find((c) => c.id === categoryId)
  if (!cat) return <p>{ui.emptyCategory[lang]}</p>
  const all = commandsInCategory(cat.id)

  return (
    <div className="cat-page">
      <header>
        <p className="eyebrow">
          {all.length} {ui.commands[lang]}
        </p>
        <h1>{cat.title[lang]}</h1>
        <p className="lead">{cat.blurb[lang]}</p>
      </header>
      {cat.subcategories.map((sub) => {
        const list = commandsInSubcategory(cat.id, sub.id)
        if (list.length === 0) return null
        return (
          <section key={sub.id}>
            <h2>{sub.title[lang]}</h2>
            <ul className="cmd-index">
              {list.map((cmd) => (
                <li key={cmd.id}>
                  <button type="button" onClick={() => onCommand(cmd.id)}>
                    <span className="nm">
                      {cmd.name}
                      {learned.has(cmd.id) && <em>{ui.learned[lang]}</em>}
                    </span>
                    <span className="ds">{cmd.description[lang]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

type SearchProps = {
  query: string
  results: Command[]
  lang: Locale
  onCommand: (id: string) => void
}

export function SearchView({ query, results, lang, onCommand }: SearchProps) {
  return (
    <div className="search-page">
      <h1>
        {ui.resultsFor[lang]} “{query}”
      </h1>
      {results.length === 0 ? (
        <p className="empty">{ui.noResults[lang]}</p>
      ) : (
        <ul className="cmd-index">
          {results.map((cmd) => {
            const cat = categories.find((c) => c.id === cmd.category)
            return (
              <li key={cmd.id}>
                <button type="button" onClick={() => onCommand(cmd.id)}>
                  <span className="nm">
                    {cmd.name}
                    <em>{cat?.title[lang]}</em>
                  </span>
                  <span className="ds">{cmd.description[lang]}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export function Missing({ lang, onHome }: { lang: Locale; onHome: () => void }) {
  const sample = commandById.get('print')
  return (
    <div className="missing">
      <p>{ui.notFound[lang]}</p>
      <button type="button" onClick={onHome}>
        {ui.backHome[lang]}
      </button>
      {sample && <p className="hint">{sample.name}</p>}
    </div>
  )
}
