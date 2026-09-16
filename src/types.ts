export type Locale = 'it' | 'en' | 'es' | 'fr'

export type I18n = Record<Locale, string>

export type Example = {
  code: string
  result: string
}

export type Command = {
  id: string
  name: string
  signature: string
  category: string
  subcategory: string
  description: I18n
  examples: Example[]
  tip?: I18n
  related?: string[]
}

export type Subcategory = {
  id: string
  title: I18n
}

export type Category = {
  id: string
  title: I18n
  blurb: I18n
  subcategories: Subcategory[]
}

export type Route =
  | { page: 'home' }
  | { page: 'category'; id: string }
  | { page: 'command'; id: string }
