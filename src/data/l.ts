import type { I18n } from '../types'

export function L(it: string, en: string, es: string, fr: string): I18n {
  return { it, en, es, fr }
}
