import { categories, commands, commandsInCategory, commandsInSubcategory } from '../data'
import { ui } from '../i18n'
import type { Locale, Route } from '../types'

type Props = {
  lang: Locale
  route: Route
  open: boolean
  onClose: () => void
  onHome: () => void
  onCategory: (id: string) => void
  onCommand: (id: string) => void
}

export function Sidebar({ lang, route, open, onClose, onHome, onCategory, onCommand }: Props) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <nav>
        <button type="button" className={`nav-home ${route.page === 'home' ? 'active' : ''}`} onClick={onHome}>
          {ui.home[lang]}
        </button>
        {categories.map((cat) => {
          const count = commandsInCategory(cat.id).length
          const active = route.page === 'category' && route.id === cat.id
          const currentCmd = route.page === 'command' ? commands.find((c) => c.id === route.id) : undefined
          const cmdActive = currentCmd?.category === cat.id
          const expanded = active || Boolean(cmdActive)
          return (
            <section key={cat.id} className={expanded ? 'is-open' : ''}>
              <button type="button" className={`cat-btn ${active ? 'active' : ''}`} onClick={() => onCategory(cat.id)}>
                <span>{cat.title[lang]}</span>
                <em>{count}</em>
              </button>
              {expanded && (
                <div className="sub-block">
                  {cat.subcategories.map((sub) => (
                    <div key={sub.id}>
                      <p className="sub-label">{sub.title[lang]}</p>
                      <ul>
                        {commandsInSubcategory(cat.id, sub.id).map((cmd) => (
                          <li key={cmd.id}>
                            <button
                              type="button"
                              className={`cmd-link ${currentCmd?.id === cmd.id ? 'active' : ''}`}
                              onClick={() => {
                                onCommand(cmd.id)
                                onClose()
                              }}
                            >
                              {cmd.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </nav>
    </aside>
  )
}
