import type { Command } from '../types'
import { L } from './l'

export const operators: Command[] = [
  {
    id: 'arithmetic',
    name: '+ - * / // % **',
    signature: 'a + b  a - b  a * b  a / b  a // b  a % b  a ** b',
    category: 'operators',
    subcategory: 'arithmetic',
    description: L(
      'Operatori aritmetici. / è sempre float. // è la divisione intera. % resto. ** potenza. + e * funzionano anche su sequenze.',
      'Arithmetic operators. / is always float. // is integer division. % remainder. ** power. + and * also work on sequences.',
      'Operadores aritméticos. / es siempre float. // es división entera. % resto. ** potencia. + y * también funcionan en secuencias.',
      'Opérateurs arithmétiques. / est toujours un flottant. // est la division entière. % reste. ** puissance. + et * marchent aussi sur les séquences.',
    ),
    examples: [
      { code: 'print(7 / 2, 7 // 2, 7 % 2)\nprint(2 ** 8)\nprint("ab" * 3)', result: '3.5 3 1\n256\nababab' },
    ],
    tip: L(
      'In Python 3, 7/2 è 3.5. Se ti serve un intero usa // o int(). Attenzione: (-7)//2 è -4 (floor division).',
      'In Python 3, 7/2 is 3.5. If you need an integer use // or int(). Note: (-7)//2 is -4 (floor division).',
      'En Python 3, 7/2 es 3.5. Si necesitas un entero usa // o int(). Ojo: (-7)//2 es -4 (floor division).',
      'En Python 3, 7/2 vaut 3.5. Si vous voulez un entier, utilisez // ou int(). Attention : (-7)//2 vaut -4 (division floor).',
    ),
    related: ['pow', 'divmod', 'int'],
  },
  {
    id: 'compare',
    name: '== != < > <= >=',
    signature: 'a == b  a != b  a < b  a > b  a <= b  a >= b',
    category: 'operators',
    subcategory: 'compare',
    description: L(
      'Confronti che producono bool. Si possono concatenare: 1 < x < 10. == confronta il valore, non l’identità.',
      'Comparisons that produce bool. They can be chained: 1 < x < 10. == compares value, not identity.',
      'Comparaciones que producen bool. Se pueden encadenar: 1 < x < 10. == compara el valor, no la identidad.',
      'Comparaisons qui produisent un bool. On peut les chaîner : 1 < x < 10. == compare la valeur, pas l’identité.',
    ),
    examples: [
      { code: 'x = 5\nprint(1 < x < 10)\nprint([1, 2] == [1, 2])\nprint("abc" < "abd")', result: 'True\nTrue\nTrue' },
    ],
    related: ['is', 'andor', 'bool'],
  },
  {
    id: 'is',
    name: 'is / is not',
    signature: 'a is b  a is not b',
    category: 'operators',
    subcategory: 'compare',
    description: L(
      'Confronta l’identità (stesso oggetto in memoria), non il valore. Usalo con None: if x is None.',
      'Compares identity (the same object in memory), not value. Use it with None: if x is None.',
      'Compara la identidad (el mismo objeto en memoria), no el valor. Úsalo con None: if x is None.',
      'Compare l’identité (le même objet en mémoire), pas la valeur. Utilisez-le avec None : if x is None.',
    ),
    examples: [
      { code: 'a = [1]\nb = a\nc = [1]\nprint(a is b, a is c, a == c)\nprint(None is None)', result: 'True False True\nTrue' },
    ],
    tip: L(
      'Non usare is per numeri o stringhe: CPython internizza alcuni valori e il risultato può sorprendere. Per i valori usa ==.',
      'Do not use is for numbers or strings: CPython interns some values and the result can surprise you. For values use ==.',
      'No uses is para números o cadenas: CPython interniza algunos valores y el resultado puede sorprender. Para valores usa ==.',
      'N’utilisez pas is pour les nombres ou les chaînes : CPython intern certaines valeurs et le résultat peut surprendre. Pour les valeurs, utilisez ==.',
    ),
    related: ['id', 'compare', 'assign'],
  },
  {
    id: 'andor',
    name: 'and / or / not',
    signature: 'a and b  a or b  not a',
    category: 'operators',
    subcategory: 'compare',
    description: L(
      'Operatori logici con corto-circuito. Restituiscono uno degli operandi, non necessariamente True/False. not restituisce sempre un bool.',
      'Logical operators with short-circuit. They return one of the operands, not necessarily True/False. not always returns a bool.',
      'Operadores lógicos con cortocircuito. Devuelven uno de los operandos, no necesariamente True/False. not siempre devuelve un bool.',
      'Opérateurs logiques avec court-circuit. Ils renvoient l’un des opérandes, pas forcément True/False. not renvoie toujours un bool.',
    ),
    examples: [
      { code: 'print(0 or "fallback")\nprint("ok" and 5)\nprint(not [])', result: 'fallback\n5\nTrue' },
    ],
    tip: L(
      'x or default è un classico, ma fallisce se x è 0 o "". Per default espliciti preferisci x if x is not None else default.',
      'x or default is a classic, but it fails if x is 0 or "". For explicit defaults prefer x if x is not None else default.',
      'x or default es un clásico, pero falla si x es 0 o "". Para defaults explícitos prefiere x if x is not None else default.',
      'x or default est un classique, mais échoue si x vaut 0 ou "". Pour un défaut explicite, préférez x if x is not None else default.',
    ),
    related: ['bool', 'if', 'compare'],
  },
  {
    id: 'walrus',
    name: ':= walrus',
    signature: 'nome := espressione',
    category: 'operators',
    subcategory: 'assign-bit',
    description: L(
      'Operatore di assegnazione in un’espressione (Python 3.8+). Utile per catturare un valore mentre lo testi in un if o while.',
      'Assignment operator inside an expression (Python 3.8+). Useful to capture a value while testing it in an if or while.',
      'Operador de asignación en una expresión (Python 3.8+). Útil para capturar un valor mientras lo pruebas en un if o while.',
      'Opérateur d’affectation dans une expression (Python 3.8+). Utile pour capturer une valeur tout en la testant dans un if ou while.',
    ),
    examples: [
      { code: 'data = "abcdef"\nif (n := len(data)) > 4:\n    print(n)', result: '6' },
    ],
    related: ['assign', 'if', 'while'],
  },
  {
    id: 'unpack',
    name: '* ** unpacking',
    signature: '*iterable  **mapping',
    category: 'operators',
    subcategory: 'assign-bit',
    description: L(
      '* espande una sequenza, ** un dizionario. Funziona in chiamate, assegnazioni, letterali di liste/dict e parametri di funzione.',
      '* expands a sequence, ** a dictionary. Works in calls, assignments, list/dict literals and function parameters.',
      '* expande una secuencia, ** un diccionario. Funciona en llamadas, asignaciones, literales de listas/dict y parámetros.',
      '* étend une séquence, ** un dictionnaire. Fonctionne dans les appels, affectations, littéraux list/dict et paramètres.',
    ),
    examples: [
      { code: 'a, *mid, z = [1, 2, 3, 4]\nprint(a, mid, z)\nprint({**{"x": 1}, "y": 2})', result: "1 [2, 3] 4\n{'x': 1, 'y': 2}" },
    ],
    related: ['args', 'tuple', 'dict'],
  },
  {
    id: 'bitwise',
    name: '& | ^ ~ << >>',
    signature: 'a & b  a | b  a ^ b  ~a  a << n  a >> n',
    category: 'operators',
    subcategory: 'assign-bit',
    description: L(
      'Operazioni bit a bit su interi. ~a è equivalente a -a-1. << e >> spostano i bit.',
      'Bitwise operations on integers. ~a is equivalent to -a-1. << and >> shift bits.',
      'Operaciones bit a bit sobre enteros. ~a equivale a -a-1. << y >> desplazan bits.',
      'Opérations bit à bit sur les entiers. ~a équivaut à -a-1. << et >> décalent les bits.',
    ),
    examples: [
      { code: 'print(0b1010 & 0b1100)\nprint(0b1010 | 0b0100)\nprint(1 << 4)', result: '8\n14\n16' },
    ],
    related: ['bin', 'int'],
  },
]
