import type { Command } from '../types'
import { L } from './l'

export const control: Command[] = [
  {
    id: 'if',
    name: 'if / elif / else',
    signature: 'if cond:\n    ...\nelif cond:\n    ...\nelse:\n    ...',
    category: 'control',
    subcategory: 'conditions',
    description: L(
      'Esegue un blocco se la condizione è vera. elif è opzionale e si può ripetere. else copre tutti gli altri casi.',
      'Runs a block if the condition is true. elif is optional and can be repeated. else covers all other cases.',
      'Ejecuta un bloque si la condición es verdadera. elif es opcional y se puede repetir. else cubre el resto.',
      'Exécute un bloc si la condition est vraie. elif est optionnel et peut se répéter. else couvre les autres cas.',
    ),
    examples: [
      {
        code: 'n = 0\nif n > 0:\n    stato = "positivo"\nelif n < 0:\n    stato = "negativo"\nelse:\n    stato = "zero"\nprint(stato)',
        result: 'zero',
      },
    ],
    related: ['ternary', 'match', 'bool'],
  },
  {
    id: 'ternary',
    name: 'x if cond else y',
    signature: 'valore_se_vero if condizione else valore_se_falso',
    category: 'control',
    subcategory: 'conditions',
    description: L(
      'Espressione condizionale in una riga. Utile per valori, non per blocchi lunghi.',
      'One-line conditional expression. Useful for values, not for long blocks.',
      'Expresión condicional en una línea. Útil para valores, no para bloques largos.',
      'Expression conditionnelle en une ligne. Utile pour des valeurs, pas pour de longs blocs.',
    ),
    examples: [
      { code: 'n = 4\nprint("pari" if n % 2 == 0 else "dispari")', result: 'pari' },
    ],
    related: ['if', 'andor'],
  },
  {
    id: 'match',
    name: 'match / case',
    signature: 'match subject:\n    case pattern:\n        ...',
    category: 'control',
    subcategory: 'conditions',
    description: L(
      'Structural pattern matching (Python 3.10+). Confronta un valore con schemi: letterali, sequenze, mapping, classi e guardie if.',
      'Structural pattern matching (Python 3.10+). Matches a value against patterns: literals, sequences, mappings, classes and if guards.',
      'Structural pattern matching (Python 3.10+). Compara un valor con patrones: literales, secuencias, mapping, clases y guardas if.',
      'Filtrage par motif (Python 3.10+). Compare une valeur à des motifs : littéraux, séquences, mappings, classes et gardes if.',
    ),
    examples: [
      {
        code: 'punto = (0, 4)\nmatch punto:\n    case (0, 0):\n        msg = "origine"\n    case (0, y):\n        msg = f"asse Y y={y}"\n    case (x, 0):\n        msg = f"asse X x={x}"\n    case _:\n        msg = "altro"\nprint(msg)',
        result: 'asse Y y=4',
      },
    ],
    tip: L(
      'case _ è il default. Attenzione: case [1, 2] cattura una sequenza di due elementi, non solo le liste.',
      'case _ is the default. Note: case [1, 2] captures a two-item sequence, not only lists.',
      'case _ es el valor por defecto. Ojo: case [1, 2] captura una secuencia de dos elementos, no solo listas.',
      'case _ est le défaut. Attention : case [1, 2] capture une séquence de deux éléments, pas seulement les listes.',
    ),
    related: ['if', 'unpack'],
  },
  {
    id: 'for',
    name: 'for',
    signature: 'for item in iterable:\n    ...\nelse:\n    ...',
    category: 'control',
    subcategory: 'loops',
    description: L(
      'Itera sugli elementi di un iterabile. Il else del for gira solo se il ciclo non è stato interrotto da break.',
      'Iterates over items of an iterable. The for-else runs only if the loop was not stopped by break.',
      'Itera sobre los elementos de un iterable. El else del for corre solo si el bucle no se interrumpió con break.',
      'Itère sur les éléments d’un itérable. Le else du for ne s’exécute que si la boucle n’a pas été arrêtée par break.',
    ),
    examples: [
      {
        code: 'for ch in "Py":\n    print(ch)\nfor n in range(3):\n    print(n, end=" ")\nprint()',
        result: 'P\ny\n0 1 2',
      },
    ],
    related: ['while', 'enumerate', 'break', 'comprehension'],
  },
  {
    id: 'while',
    name: 'while',
    signature: 'while condizione:\n    ...',
    category: 'control',
    subcategory: 'loops',
    description: L(
      'Ripete il blocco finché la condizione è vera. Utile quando non sai in anticipo quante iterazioni servono.',
      'Repeats the block while the condition is true. Useful when you do not know the number of iterations in advance.',
      'Repite el bloque mientras la condición sea verdadera. Útil cuando no sabes de antemano cuántas iteraciones harán falta.',
      'Répète le bloc tant que la condition est vraie. Utile quand on ne connaît pas d’avance le nombre d’itérations.',
    ),
    examples: [
      {
        code: 'n = 3\nwhile n:\n    print(n)\n    n -= 1',
        result: '3\n2\n1',
      },
    ],
    related: ['for', 'break', 'walrus'],
  },
  {
    id: 'break',
    name: 'break / continue / pass',
    signature: 'break  continue  pass',
    category: 'control',
    subcategory: 'loops',
    description: L(
      'break esce dal ciclo più interno. continue salta il resto dell’iterazione. pass è un segnaposto che non fa nulla.',
      'break leaves the innermost loop. continue skips the rest of the iteration. pass is a no-op placeholder.',
      'break sale del bucle más interno. continue salta el resto de la iteración. pass es un marcador que no hace nada.',
      'break quitte la boucle la plus interne. continue saute le reste de l’itération. pass est un placeholder sans effet.',
    ),
    examples: [
      {
        code: 'for n in range(5):\n    if n == 1:\n        continue\n    if n == 3:\n        break\n    print(n)\npass  # da implementare',
        result: '0\n2',
      },
    ],
    related: ['for', 'while', 'if'],
  },
]
