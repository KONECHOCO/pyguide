import { basics } from './basics'
import { numbers } from './numbers'
import { text } from './text'
import { sequences } from './sequences'
import { collections } from './collections'
import { operators } from './operators'
import { control } from './control'
import { functions } from './functions'
import { oop } from './oop'
import { files, errors, modules } from './files'
import { stdlib } from './stdlib'
import { categories } from './categories'
import { L } from './l'
import type { Command, Locale } from '../types'

export { categories }

export const commands: Command[] = [
  ...basics,
  ...numbers,
  ...text,
  ...sequences,
  ...collections,
  ...operators,
  ...control,
  ...functions,
  ...oop,
  ...files,
  ...errors,
  ...modules,
  ...stdlib,
]

export const commandById = new Map(commands.map((c) => [c.id, c]))

export const learningPath = [
  'print',
  'assign',
  'type',
  'int',
  'str',
  'list',
  'dict',
  'if',
  'for',
  'def',
  'class',
  'open',
  'try',
  'import',
]

export const pathLabel = L(
  'Dalle stampe alle classi, poi file, errori e moduli.',
  'From printing to classes, then files, errors and modules.',
  'De las impresiones a las clases, luego archivos, errores y módulos.',
  'De l’affichage aux classes, puis fichiers, erreurs et modules.',
)

export function commandsInCategory(categoryId: string): Command[] {
  return commands.filter((c) => c.category === categoryId)
}

export function commandsInSubcategory(categoryId: string, subcategoryId: string): Command[] {
  return commands.filter((c) => c.category === categoryId && c.subcategory === subcategoryId)
}

export function searchCommands(query: string, lang: Locale): Command[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return commands.filter((c) => {
    const cat = categories.find((x) => x.id === c.category)
    const sub = cat?.subcategories.find((x) => x.id === c.subcategory)
    const hay = [
      c.name,
      c.id,
      c.signature,
      c.description[lang],
      cat?.title[lang] ?? '',
      sub?.title[lang] ?? '',
    ]
      .join(' ')
      .toLowerCase()
    return hay.includes(q)
  })
}

export function relatedCommands(cmd: Command): Command[] {
  return (cmd.related ?? [])
    .map((id) => commandById.get(id))
    .filter((c): c is Command => Boolean(c))
}
