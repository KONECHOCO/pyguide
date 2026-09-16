import { categories, commands, commandsInCategory, learningPath, pathLabel, commandById } from '../data'
import { ui } from '../i18n'
import type { Locale } from '../types'

type Props = {
  lang: Locale
  learned: Set<string>
  onCategory: (id: string) => void
  onCommand: (id: string) => void
}

export function Home({ lang, learned, onCategory, onCommand }: Props) {
  const done = learningPath.filter((id) => learned.has(id)).length

  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">{ui.pythonVersion[lang]}</p>
        <h1>
          <span className="py-blue">Py</span>
          <span className="py-yellow">thon</span>
          <br />
          {ui.tagline[lang]}
        </h1>
        <p className="lead">{ui.heroLead[lang]}</p>
        <dl className="stats">
          <div>
            <dt>{commands.length}</dt>
            <dd>
              {ui.commands[lang]}
              <small>{ui.countHint[lang]}</small>
            </dd>
          </div>
          <div>
            <dt>{categories.length}</dt>
            <dd>{ui.categories[lang]}</dd>
          </div>
          <div>
            <dt>4</dt>
            <dd>{ui.language[lang]}</dd>
          </div>
        </dl>
      </section>

      <section className="path">
        <header>
          <h2>{ui.startPath[lang]}</h2>
          <p>
            {pathLabel[lang]} · {done} {ui.of[lang]} {learningPath.length} {ui.learned[lang].toLowerCase()}
          </p>
        </header>
        <ol>
          {learningPath.map((id, i) => {
            const cmd = commandById.get(id)
            if (!cmd) return null
            return (
              <li key={id} className={learned.has(id) ? 'done' : ''}>
                <button type="button" onClick={() => onCommand(id)}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="nm">{cmd.name}</span>
                  <span className="ds">{cmd.description[lang]}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </section>

      <section className="index">
        <h2>{ui.browse[lang]}</h2>
        <table>
          <tbody>
            {categories.map((cat) => {
              const list = commandsInCategory(cat.id)
              return (
                <tr key={cat.id}>
                  <th>
                    <button type="button" onClick={() => onCategory(cat.id)}>
                      {cat.title[lang]}
                    </button>
                  </th>
                  <td>{cat.blurb[lang]}</td>
                  <td>
                    {list.slice(0, 4).map((c) => (
                      <button key={c.id} type="button" className="pill" onClick={() => onCommand(c.id)}>
                        {c.name}
                      </button>
                    ))}
                    {list.length > 4 && <span className="more">+{list.length - 4}</span>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
