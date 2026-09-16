import type { Command } from '../types'
import { L } from './l'

export const collections: Command[] = [
  {
    id: 'dict',
    name: 'dict()',
    signature: 'dict(**kwargs)  dict(mapping)  dict(iterable)',
    category: 'collections',
    subcategory: 'dicts',
    description: L(
      'Mappa chiave → valore. Le chiavi devono essere hashable (immutabili). Da 3.7 l’ordine di inserimento è garantito.',
      'Maps key → value. Keys must be hashable (immutable). Since 3.7 insertion order is guaranteed.',
      'Mapea clave → valor. Las claves deben ser hashable (inmutables). Desde 3.7 el orden de inserción está garantizado.',
      'Associe clé → valeur. Les clés doivent être hachables (immuables). Depuis 3.7 l’ordre d’insertion est garanti.',
    ),
    examples: [
      { code: 'd = {"lang": "Python", "year": 1991}\nprint(d["lang"])\nd["year"] = 1991\nprint(list(d))', result: "Python\n['lang', 'year']" },
    ],
    tip: L(
      'd[k] alza KeyError se la chiave manca. Per un default usa get() o defaultdict.',
      'd[k] raises KeyError if the key is missing. For a default use get() or defaultdict.',
      'd[k] lanza KeyError si falta la clave. Para un valor por defecto usa get() o defaultdict.',
      'd[k] lève KeyError si la clé manque. Pour une valeur par défaut utilisez get() ou defaultdict.',
    ),
    related: ['dict-get', 'dict-items', 'set'],
  },
  {
    id: 'dict-get',
    name: 'dict.get() / setdefault()',
    signature: 'd.get(key, default=None)  d.setdefault(key, default=None)',
    category: 'collections',
    subcategory: 'dicts',
    description: L(
      'get restituisce default se la chiave non c’è. setdefault la inserisce se manca e restituisce il valore.',
      'get returns default if the key is missing. setdefault inserts it if missing and returns the value.',
      'get devuelve default si falta la clave. setdefault la inserta si falta y devuelve el valor.',
      'get renvoie default si la clé manque. setdefault l’insère si elle manque et renvoie la valeur.',
    ),
    examples: [
      { code: 'd = {"a": 1}\nprint(d.get("b", 0))\nd.setdefault("b", 2)\nprint(d)', result: "0\n{'a': 1, 'b': 2}" },
    ],
    related: ['dict', 'dict-items', 'counter'],
  },
  {
    id: 'dict-items',
    name: 'dict.keys() / values() / items()',
    signature: 'd.keys()  d.values()  d.items()',
    category: 'collections',
    subcategory: 'dicts',
    description: L(
      'Viste dinamiche delle chiavi, dei valori e delle coppie. Si aggiornano se il dizionario cambia.',
      'Dynamic views of keys, values and pairs. They update if the dictionary changes.',
      'Vistas dinámicas de claves, valores y pares. Se actualizan si el diccionario cambia.',
      'Vues dynamiques des clés, valeurs et paires. Elles se mettent à jour si le dictionnaire change.',
    ),
    examples: [
      { code: 'd = {"x": 1, "y": 2}\nfor k, v in d.items():\n    print(k, v)', result: 'x 1\ny 2' },
    ],
    related: ['dict', 'zip', 'for'],
  },
  {
    id: 'dict-update',
    name: 'dict.update() / pop() / popitem()',
    signature: 'd.update(other)  d.pop(key, default)  d.popitem()',
    category: 'collections',
    subcategory: 'dicts',
    description: L(
      'update mescola un altro mapping. pop toglie una chiave. popitem toglie l’ultima coppia inserita.',
      'update merges another mapping. pop removes a key. popitem removes the last inserted pair.',
      'update mezcla otro mapping. pop quita una clave. popitem quita el último par insertado.',
      'update fusionne un autre mapping. pop retire une clé. popitem retire la dernière paire insérée.',
    ),
    examples: [
      { code: 'd = {"a": 1, "b": 2}\nd.update({"b": 9, "c": 3})\nprint(d.pop("a"), d)', result: "1 {'b': 9, 'c': 3}" },
    ],
    related: ['dict', 'dict-get'],
  },
  {
    id: 'set',
    name: 'set()',
    signature: 'set(iterable=())',
    category: 'collections',
    subcategory: 'sets',
    description: L(
      'Insieme non ordinato di elementi unici hashable. Ottimo per deduplicare e testare l’appartenenza in tempo medio costante.',
      'Unordered collection of unique hashable items. Great for deduplicating and membership tests in average constant time.',
      'Conjunto no ordenado de elementos únicos hashable. Ideal para deduplicar y probar pertenencia en tiempo promedio constante.',
      'Ensemble non ordonné d’éléments uniques hachables. Idéal pour dédupliquer et tester l’appartenance en temps moyen constant.',
    ),
    examples: [
      { code: 'print(set([1, 2, 2, 3]))\nprint({1, 2} | {2, 3})\nprint(2 in {1, 2, 3})', result: '{1, 2, 3}\n{1, 2, 3}\nTrue' },
    ],
    related: ['set-ops', 'frozenset', 'in'],
  },
  {
    id: 'set-ops',
    name: 'set.add() / union / intersection',
    signature: 's.add(x)  s | t  s & t  s - t  s ^ t',
    category: 'collections',
    subcategory: 'sets',
    description: L(
      'add inserisce un elemento. | unione, & intersezione, - differenza, ^ differenza simmetrica. I metodi union/intersection/difference non modificano l’insieme originale.',
      'add inserts an item. | union, & intersection, - difference, ^ symmetric difference. union/intersection/difference methods do not modify the original set.',
      'add inserta un elemento. | unión, & intersección, - diferencia, ^ diferencia simétrica. Los métodos no modifican el conjunto original.',
      'add insère un élément. | union, & intersection, - différence, ^ différence symétrique. Les méthodes ne modifient pas l’ensemble d’origine.',
    ),
    examples: [
      { code: 'a, b = {1, 2, 3}, {3, 4}\na.add(5)\nprint(a & b)\nprint(a - b)\nprint(a ^ b)', result: '{3}\n{1, 2, 5}\n{1, 2, 4, 5}' },
    ],
    related: ['set', 'frozenset'],
  },
  {
    id: 'frozenset',
    name: 'frozenset()',
    signature: 'frozenset(iterable=())',
    category: 'collections',
    subcategory: 'sets',
    description: L(
      'Insieme immutabile. Può essere chiave di un dizionario o elemento di un altro set.',
      'Immutable set. It can be a dict key or a member of another set.',
      'Conjunto inmutable. Puede ser clave de un diccionario o elemento de otro set.',
      'Ensemble immuable. Peut être une clé de dict ou un membre d’un autre set.',
    ),
    examples: [
      { code: 'fs = frozenset([1, 2, 2])\nprint(fs)\nprint({fs: "ok"}[fs])', result: "frozenset({1, 2})\nok" },
    ],
    related: ['set', 'dict', 'tuple'],
  },
]
