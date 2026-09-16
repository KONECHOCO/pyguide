import type { Command } from '../types'
import { L } from './l'

export const functions: Command[] = [
  {
    id: 'def',
    name: 'def',
    signature: 'def nome(parametri) -> tipo:\n    ...\n    return valore',
    category: 'functions',
    subcategory: 'define',
    description: L(
      'Definisce una funzione. I parametri possono avere default. L’annotazione -> è opzionale e non viene applicata a runtime.',
      'Defines a function. Parameters can have defaults. The -> annotation is optional and is not enforced at runtime.',
      'Define una función. Los parámetros pueden tener default. La anotación -> es opcional y no se aplica en runtime.',
      'Définit une fonction. Les paramètres peuvent avoir des valeurs par défaut. L’annotation -> est optionnelle et n’est pas appliquée à l’exécution.',
    ),
    examples: [
      {
        code: 'def greet(name: str, times: int = 1) -> str:\n    return ("Ciao " + name + "! ") * times\nprint(greet("Ada"))\nprint(greet("Ada", 2))',
        result: 'Ciao Ada! \nCiao Ada! Ciao Ada! ',
      },
    ],
    tip: L(
      'I default mutabili (liste, dict) si condividono tra le chiamate. Usa None e crea la lista nel corpo.',
      'Mutable defaults (lists, dicts) are shared across calls. Use None and create the list in the body.',
      'Los default mutables (listas, dict) se comparten entre llamadas. Usa None y crea la lista en el cuerpo.',
      'Les défauts mutables (listes, dict) sont partagés entre les appels. Utilisez None et créez la liste dans le corps.',
    ),
    related: ['return', 'args', 'lambda'],
  },
  {
    id: 'return',
    name: 'return',
    signature: 'return [espressione]',
    category: 'functions',
    subcategory: 'define',
    description: L(
      'Esce dalla funzione e restituisce un valore. Senza espressione restituisce None. Puoi restituire più valori come tupla.',
      'Leaves the function and returns a value. Without an expression it returns None. You can return several values as a tuple.',
      'Sale de la función y devuelve un valor. Sin expresión devuelve None. Puedes devolver varios valores como tupla.',
      'Quitte la fonction et renvoie une valeur. Sans expression, renvoie None. Vous pouvez renvoyer plusieurs valeurs comme tuple.',
    ),
    examples: [
      {
        code: 'def split_name(full):\n    parts = full.split()\n    return parts[0], parts[-1]\nnome, cognome = split_name("Ada Lovelace")\nprint(nome, cognome)',
        result: 'Ada Lovelace',
      },
    ],
    related: ['def', 'tuple', 'unpack'],
  },
  {
    id: 'lambda',
    name: 'lambda',
    signature: 'lambda parametri: espressione',
    category: 'functions',
    subcategory: 'define',
    description: L(
      'Funzione anonima di una sola espressione. Comoda come key= o callback breve.',
      'Anonymous function of a single expression. Handy as key= or a short callback.',
      'Función anónima de una sola expresión. Cómoda como key= o callback breve.',
      'Fonction anonyme d’une seule expression. Pratique comme key= ou petit callback.',
    ),
    examples: [
      { code: 'square = lambda n: n * n\nprint(square(6))\nprint(sorted(["aa", "b", "ccc"], key=lambda s: len(s)))', result: "36\n['b', 'aa', 'ccc']" },
    ],
    tip: L(
      'Se il corpo cresce, passa a def: è più chiaro e si può documentare.',
      'If the body grows, switch to def: it is clearer and can be documented.',
      'Si el cuerpo crece, pasa a def: es más claro y se puede documentar.',
      'Si le corps grandit, passez à def : c’est plus clair et documentable.',
    ),
    related: ['def', 'sorted', 'map'],
  },
  {
    id: 'args',
    name: '*args **kwargs',
    signature: 'def f(*args, **kwargs):',
    category: 'functions',
    subcategory: 'define',
    description: L(
      '*args raccoglie argomenti posizionali extra in una tupla. **kwargs raccoglie quelli nominati in un dizionario.',
      '*args collects extra positional arguments in a tuple. **kwargs collects named ones in a dictionary.',
      '*args reúne argumentos posicionales extra en una tupla. **kwargs reúne los nombrados en un diccionario.',
      '*args rassemble les arguments positionnels extra dans un tuple. **kwargs rassemble les nommés dans un dictionnaire.',
    ),
    examples: [
      {
        code: 'def show(*args, **kwargs):\n    print(args, kwargs)\nshow(1, 2, a=3)',
        result: "(1, 2) {'a': 3}",
      },
    ],
    related: ['unpack', 'def', 'callable'],
  },
  {
    id: 'callable',
    name: 'callable()',
    signature: 'callable(object)',
    category: 'functions',
    subcategory: 'define',
    description: L(
      'True se l’oggetto si può chiamare con (). Funzioni, classi e oggetti con __call__ sono callable.',
      'True if the object can be called with (). Functions, classes and objects with __call__ are callable.',
      'True si el objeto se puede llamar con (). Funciones, clases y objetos con __call__ son callable.',
      'True si l’objet peut être appelé avec (). Fonctions, classes et objets avec __call__ sont callable.',
    ),
    examples: [
      { code: 'print(callable(len), callable(42), callable(str))', result: 'True False True' },
    ],
    related: ['def', 'class'],
  },
  {
    id: 'map',
    name: 'map() / filter()',
    signature: 'map(function, iterable)  filter(function, iterable)',
    category: 'functions',
    subcategory: 'functional',
    description: L(
      'map applica una funzione a ogni elemento. filter tiene gli elementi per cui la funzione è vera. Restituiscono iteratori pigri.',
      'map applies a function to every item. filter keeps items for which the function is true. They return lazy iterators.',
      'map aplica una función a cada elemento. filter conserva los elementos para los que la función es verdadera. Devuelven iteradores perezosos.',
      'map applique une fonction à chaque élément. filter garde les éléments pour lesquels la fonction est vraie. Ils renvoient des itérateurs paresseux.',
    ),
    examples: [
      { code: 'print(list(map(str.upper, ["a", "b"])))\nprint(list(filter(lambda n: n % 2 == 0, range(6))))', result: "['A', 'B']\n[0, 2, 4]" },
    ],
    tip: L(
      'In Python moderno le comprehension sono spesso più leggibili di map/filter con lambda.',
      'In modern Python, comprehensions are often more readable than map/filter with lambda.',
      'En Python moderno, las comprehension suelen ser más legibles que map/filter con lambda.',
      'En Python moderne, les comprehensions sont souvent plus lisibles que map/filter avec lambda.',
    ),
    related: ['comprehension', 'lambda', 'anyall'],
  },
  {
    id: 'anyall',
    name: 'any() / all()',
    signature: 'any(iterable)  all(iterable)',
    category: 'functions',
    subcategory: 'functional',
    description: L(
      'any è True se almeno un elemento è vero. all è True se tutti lo sono (e anche se l’iterabile è vuoto).',
      'any is True if at least one item is true. all is True if every item is true (and also if the iterable is empty).',
      'any es True si al menos un elemento es verdadero. all es True si todos lo son (y también si el iterable está vacío).',
      'any est True si au moins un élément est vrai. all est True si tous le sont (et aussi si l’itérable est vide).',
    ),
    examples: [
      { code: 'print(any([0, "", 5]))\nprint(all([1, 2, 3]))\nprint(all([]))', result: 'True\nTrue\nTrue' },
    ],
    related: ['map', 'bool', 'comprehension'],
  },
  {
    id: 'comprehension',
    name: '[x for x in …]',
    signature: '[expr for x in it if cond]  {k: v for ...}  {x for ...}  (expr for x in it)',
    category: 'functions',
    subcategory: 'functional',
    description: L(
      'Comprehension: liste, dict, set e generator expression. Più pythoniche e spesso più veloci dei cicli che costruiscono collezioni a mano.',
      'Comprehensions: lists, dicts, sets and generator expressions. More Pythonic and often faster than loops that build collections by hand.',
      'Comprehension: listas, dict, set y generator expression. Más pitónicas y a menudo más rápidas que bucles que construyen colecciones a mano.',
      'Comprehensions : listes, dict, sets et expressions génératrices. Plus pythoniques et souvent plus rapides que des boucles qui construisent des collections à la main.',
    ),
    examples: [
      {
        code: 'print([n * n for n in range(5) if n % 2 == 0])\nprint({c: ord(c) for c in "ab"})\nprint(sum(n for n in range(5)))',
        result: '[0, 4, 16]\n{\'a\': 97, \'b\': 98}\n10',
      },
    ],
    related: ['map', 'for', 'dict'],
  },
  {
    id: 'iter',
    name: 'iter() / next()',
    signature: 'iter(object)  next(iterator, default)',
    category: 'functions',
    subcategory: 'iterators',
    description: L(
      'iter() ottiene un iteratore. next() produce il valore successivo. Con default non alza StopIteration a fine sequenza.',
      'iter() gets an iterator. next() yields the next value. With default it does not raise StopIteration at the end.',
      'iter() obtiene un iterador. next() produce el valor siguiente. Con default no lanza StopIteration al final.',
      'iter() obtient un itérateur. next() produit la valeur suivante. Avec default, il ne lève pas StopIteration à la fin.',
    ),
    examples: [
      { code: 'it = iter([10, 20])\nprint(next(it))\nprint(next(it))\nprint(next(it, "fine"))', result: '10\n20\nfine' },
    ],
    related: ['for', 'zip', 'range'],
  },
]
