import { useState } from 'react'
import { tokenize } from '../highlight'
import { ui } from '../i18n'
import type { Locale } from '../types'

type Props = {
  code: string
  lang: Locale
  result?: boolean
}

export function CodeBlock({ code, lang, result = false }: Props) {
  const [copied, setCopied] = useState(false)
  const tokens = result ? [{ kind: 'text', text: code }] : tokenize(code)

  async function copy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className={`code-wrap ${result ? 'is-result' : 'is-source'}`}>
      <div className="code-meta">
        <span>{result ? ui.result[lang] : 'Python'}</span>
        <button type="button" className="copy-btn" onClick={() => void copy()}>
          {copied ? ui.copied[lang] : ui.copy[lang]}
        </button>
      </div>
      <pre className="code-pre">
        <code>
          {tokens.map((t, i) => (
            <span key={i} className={`tok-${t.kind}`}>
              {t.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
