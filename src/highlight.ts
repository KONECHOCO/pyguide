const KEYWORDS = new Set([
  'False',
  'None',
  'True',
  'and',
  'as',
  'assert',
  'async',
  'await',
  'break',
  'class',
  'continue',
  'def',
  'del',
  'elif',
  'else',
  'except',
  'finally',
  'for',
  'from',
  'global',
  'if',
  'import',
  'in',
  'is',
  'lambda',
  'nonlocal',
  'not',
  'or',
  'pass',
  'raise',
  'return',
  'try',
  'while',
  'with',
  'yield',
  'match',
  'case',
])

const BUILTINS = new Set([
  'print',
  'input',
  'len',
  'range',
  'type',
  'int',
  'str',
  'float',
  'list',
  'dict',
  'set',
  'tuple',
  'bool',
  'sum',
  'min',
  'max',
  'sorted',
  'enumerate',
  'zip',
  'map',
  'filter',
  'open',
  'super',
  'property',
  'isinstance',
  'issubclass',
  'abs',
  'round',
  'pow',
  'next',
  'iter',
  'any',
  'all',
])

export type Token = { kind: string; text: string }

export function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  const n = code.length

  while (i < n) {
    const ch = code[i]

    if (ch === '#') {
      const start = i
      while (i < n && code[i] !== '\n') i += 1
      tokens.push({ kind: 'comment', text: code.slice(start, i) })
      continue
    }

    if (ch === '"' || ch === "'") {
      const quote = ch
      const start = i
      i += 1
      if (code.slice(start, start + 3) === quote.repeat(3)) {
        i = start + 3
        const end = code.indexOf(quote.repeat(3), i)
        i = end === -1 ? n : end + 3
        tokens.push({ kind: 'string', text: code.slice(start, i) })
        continue
      }
      while (i < n && code[i] !== quote) {
        if (code[i] === '\\') i += 2
        else i += 1
      }
      if (i < n) i += 1
      tokens.push({ kind: 'string', text: code.slice(start, i) })
      continue
    }

    if (ch === 'f' && (code[i + 1] === '"' || code[i + 1] === "'")) {
      tokens.push({ kind: 'prefix', text: 'f' })
      i += 1
      continue
    }

    if (ch === 'r' && (code[i + 1] === '"' || code[i + 1] === "'")) {
      tokens.push({ kind: 'prefix', text: 'r' })
      i += 1
      continue
    }

    if (/[0-9]/.test(ch)) {
      const start = i
      while (i < n && /[0-9_.xobA-Fa-f]/.test(code[i])) i += 1
      tokens.push({ kind: 'number', text: code.slice(start, i) })
      continue
    }

    if (/[A-Za-z_]/.test(ch)) {
      const start = i
      while (i < n && /[A-Za-z0-9_]/.test(code[i])) i += 1
      const word = code.slice(start, i)
      const kind = KEYWORDS.has(word) ? 'kw' : BUILTINS.has(word) ? 'fn' : 'id'
      tokens.push({ kind, text: word })
      continue
    }

    tokens.push({ kind: 'text', text: ch })
    i += 1
  }

  return tokens
}
