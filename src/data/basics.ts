import type { Command } from '../types'
import { L } from './l'

export const basics: Command[] = [
  {
    id: 'print',
    name: 'print()',
    signature: 'print(*objects, sep=" ", end="\\n", file=sys.stdout, flush=False)',
    category: 'basics',
    subcategory: 'io',
    description: L(
      'Stampa uno o più oggetti sulla console, convertendoli in testo.',
      'Prints one or more objects to the console, converting them to text.',
      'Imprime uno o más objetos en la consola, convirtiéndolos en texto.',
      'Affiche un ou plusieurs objets dans la console, en les convertissant en texte.',
    ),
    examples: [
      { code: 'print("Ciao, Python")', result: 'Ciao, Python' },
      { code: 'print("a", "b", "c", sep="-")\nprint("stesso rigo", end="!")\nprint(" continua")', result: 'a-b-c\nstesso rigo! continua' },
    ],
    tip: L(
      'Usa sep per il separatore e end="" per non andare a capo. flush=True forza l’uscita immediata.',
      'Use sep for the separator and end="" to skip the newline. flush=True forces immediate output.',
      'Usa sep para el separador y end="" para no saltar de línea. flush=True fuerza la salida inmediata.',
      'Utilisez sep pour le séparateur et end="" pour ne pas aller à la ligne. flush=True force la sortie immédiate.',
    ),
    related: ['input', 'format', 'fstring'],
  },
  {
    id: 'input',
    name: 'input()',
    signature: 'input(prompt="")',
    category: 'basics',
    subcategory: 'io',
    description: L(
      'Legge una riga di testo dall’utente e la restituisce come stringa.',
      'Reads a line of text from the user and returns it as a string.',
      'Lee una línea de texto del usuario y la devuelve como cadena.',
      'Lit une ligne de texte saisie par l’utilisateur et la renvoie comme chaîne.',
    ),
    examples: [
      {
        code: 'nome = input("Nome: ")\nprint(f"Ciao {nome}")',
        result: 'Nome: Ada\nCiao Ada',
      },
      {
        code: 'n = int(input("Numero: "))\nprint(n * 2)',
        result: 'Numero: 7\n14',
      },
    ],
    tip: L(
      'input() restituisce sempre str. Converti con int() o float() se ti serve un numero, e gestisci ValueError.',
      'input() always returns str. Convert with int() or float() if you need a number, and handle ValueError.',
      'input() siempre devuelve str. Convierte con int() o float() si necesitas un número, y gestiona ValueError.',
      'input() renvoie toujours str. Convertissez avec int() ou float() si vous avez besoin d’un nombre, et gérez ValueError.',
    ),
    related: ['print', 'int', 'str'],
  },
  {
    id: 'comment',
    name: '# commento',
    signature: '# testo ignorato dal interprete',
    category: 'basics',
    subcategory: 'variables',
    description: L(
      'Il cancelletto inizia un commento fino a fine riga. Le stringhe tra triple virgolette documentano moduli, classi e funzioni.',
      'A hash starts a comment until the end of the line. Triple-quoted strings document modules, classes and functions.',
      'El numeral inicia un comentario hasta el final de la línea. Las cadenas entre comillas triples documentan módulos, clases y funciones.',
      'Le dièse commence un commentaire jusqu’à la fin de la ligne. Les chaînes entre triples guillemets documentent modules, classes et fonctions.',
    ),
    examples: [
      {
        code: 'x = 10  # valore iniziale\n"""Documentazione del modulo."""\nprint(x)',
        result: '10',
      },
    ],
    tip: L(
      'Usa commenti per il perché, non per ripetere il cosa. Per la documentazione pubblica preferisci docstring.',
      'Use comments for why, not to repeat what. Prefer docstrings for public documentation.',
      'Usa comentarios para el porqué, no para repetir el qué. Prefiere docstring para la documentación pública.',
      'Utilisez les commentaires pour le pourquoi, pas pour répéter le quoi. Préférez les docstrings pour la documentation publique.',
    ),
    related: ['help', 'def', 'class'],
  },
  {
    id: 'assign',
    name: '= assegnazione',
    signature: 'nome = valore',
    category: 'basics',
    subcategory: 'variables',
    description: L(
      'Associa un nome a un oggetto. Python è tipizzato dinamicamente: il tipo vive nell’oggetto, non nella variabile.',
      'Binds a name to an object. Python is dynamically typed: the type lives on the object, not the variable.',
      'Asocia un nombre a un objeto. Python es de tipado dinámico: el tipo vive en el objeto, no en la variable.',
      'Lie un nom à un objet. Python est typé dynamiquement : le type vit sur l’objet, pas sur la variable.',
    ),
    examples: [
      {
        code: 'x = 3\ny, z = 1, 2\na = b = 0\nprint(x, y, z, a, b)',
        result: '3 1 2 0 0',
      },
      {
        code: 'x = 5\nx = "ora sono testo"\nprint(x, type(x))',
        result: "ora sono testo <class 'str'>",
      },
    ],
    tip: L(
      'I nomi sono riferimenti. Se due nomi puntano alla stessa lista mutabile, modificarla si vede da entrambi.',
      'Names are references. If two names point to the same mutable list, changing it is visible through both.',
      'Los nombres son referencias. Si dos nombres apuntan a la misma lista mutable, modificarla se ve desde ambos.',
      'Les noms sont des références. Si deux noms pointent vers la même liste mutable, la modifier est visible des deux.',
    ),
    related: ['walrus', 'unpack', 'id'],
  },
  {
    id: 'type',
    name: 'type()',
    signature: 'type(object)',
    category: 'basics',
    subcategory: 'inspect',
    description: L(
      'Restituisce il tipo (la classe) di un oggetto. Utile per capire cosa hai in mano durante il debug.',
      'Returns the type (the class) of an object. Useful to see what you have during debugging.',
      'Devuelve el tipo (la clase) de un objeto. Útil para saber qué tienes durante la depuración.',
      'Renvoie le type (la classe) d’un objet. Utile pour savoir ce que vous avez pendant le débogage.',
    ),
    examples: [
      {
        code: 'print(type(42))\nprint(type(3.14))\nprint(type("hi"))\nprint(type([1, 2]))',
        result: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'list'>",
      },
    ],
    tip: L(
      'Per i controlli nel codice preferisci isinstance(), che rispetta anche le sottoclassi.',
      'For checks in code prefer isinstance(), which also respects subclasses.',
      'Para comprobaciones en el código prefiere isinstance(), que también respeta las subclases.',
      'Pour les contrôles dans le code préférez isinstance(), qui respecte aussi les sous-classes.',
    ),
    related: ['isinstance', 'dir', 'id'],
  },
  {
    id: 'id',
    name: 'id()',
    signature: 'id(object)',
    category: 'basics',
    subcategory: 'inspect',
    description: L(
      'Restituisce l’identità unica dell’oggetto in memoria (un intero). Due nomi con lo stesso id puntano allo stesso oggetto.',
      'Returns the unique identity of the object in memory (an integer). Two names with the same id point to the same object.',
      'Devuelve la identidad única del objeto en memoria (un entero). Dos nombres con el mismo id apuntan al mismo objeto.',
      'Renvoie l’identité unique de l’objet en mémoire (un entier). Deux noms avec le même id pointent vers le même objet.',
    ),
    examples: [
      {
        code: 'a = [1, 2]\nb = a\nc = [1, 2]\nprint(id(a) == id(b))\nprint(id(a) == id(c))',
        result: 'True\nFalse',
      },
    ],
    tip: L(
      'Non usare id() per la logica di business. Per confrontare identità usa l’operatore is.',
      'Do not use id() for business logic. To compare identity use the is operator.',
      'No uses id() para la lógica de negocio. Para comparar identidad usa el operador is.',
      'N’utilisez pas id() pour la logique métier. Pour comparer l’identité utilisez l’opérateur is.',
    ),
    related: ['is', 'type', 'hash'],
  },
  {
    id: 'isinstance',
    name: 'isinstance()',
    signature: 'isinstance(object, classinfo)',
    category: 'basics',
    subcategory: 'inspect',
    description: L(
      'Verifica se un oggetto è un’istanza di una classe (o di una tupla di classi), comprese le sottoclassi.',
      'Checks whether an object is an instance of a class (or a tuple of classes), including subclasses.',
      'Comprueba si un objeto es una instancia de una clase (o de una tupla de clases), incluidas las subclases.',
      'Vérifie si un objet est une instance d’une classe (ou d’un tuple de classes), y compris les sous-classes.',
    ),
    examples: [
      {
        code: 'print(isinstance(3, int))\nprint(isinstance(True, int))\nprint(isinstance("x", (int, str)))',
        result: 'True\nTrue\nTrue',
      },
    ],
    tip: L(
      'True è una sottoclasse di int. classinfo può essere una tupla: isinstance(x, (int, float)).',
      'True is a subclass of int. classinfo can be a tuple: isinstance(x, (int, float)).',
      'True es una subclase de int. classinfo puede ser una tupla: isinstance(x, (int, float)).',
      'True est une sous-classe de int. classinfo peut être un tuple : isinstance(x, (int, float)).',
    ),
    related: ['type', 'issubclass', 'bool'],
  },
  {
    id: 'help',
    name: 'help()',
    signature: 'help(object)',
    category: 'basics',
    subcategory: 'inspect',
    description: L(
      'Mostra la documentazione interattiva di un oggetto, modulo o parola chiave. Nel REPL, help() senza argomenti apre la modalità aiuto.',
      'Shows the interactive documentation of an object, module or keyword. In the REPL, help() with no arguments opens help mode.',
      'Muestra la documentación interactiva de un objeto, módulo o palabra clave. En el REPL, help() sin argumentos abre el modo de ayuda.',
      'Affiche la documentation interactive d’un objet, module ou mot-clé. Dans le REPL, help() sans arguments ouvre le mode d’aide.',
    ),
    examples: [
      {
        code: 'print(str.upper.__doc__)',
        result: 'Return a copy of the string converted to uppercase.',
      },
    ],
    tip: L(
      'Nel REPL prova help(list) o help("for"). È la prima risorsa quando dimentichi la firma di una funzione.',
      'In the REPL try help(list) or help("for"). It is the first resource when you forget a function signature.',
      'En el REPL prueba help(list) o help("for"). Es el primer recurso cuando olvidas la firma de una función.',
      'Dans le REPL essayez help(list) ou help("for"). C’est la première ressource quand vous oubliez la signature d’une fonction.',
    ),
    related: ['dir', 'type'],
  },
  {
    id: 'dir',
    name: 'dir()',
    signature: 'dir([object])',
    category: 'basics',
    subcategory: 'inspect',
    description: L(
      'Elenca i nomi disponibili: senza argomenti, i nomi nello spazio locale; con un oggetto, i suoi attributi e metodi.',
      'Lists available names: with no arguments, names in the local namespace; with an object, its attributes and methods.',
      'Enumera los nombres disponibles: sin argumentos, los nombres del espacio local; con un objeto, sus atributos y métodos.',
      'Liste les noms disponibles : sans arguments, les noms de l’espace local ; avec un objet, ses attributs et méthodes.',
    ),
    examples: [
      {
        code: 'print([n for n in dir("abc") if not n.startswith("_")][:6])',
        result: "['capitalize', 'casefold', 'center', 'count', 'encode', 'endswith']",
      },
    ],
    tip: L(
      'Filtra i nomi che iniziano con _ se vuoi vedere solo l’API pubblica.',
      'Filter names that start with _ if you only want the public API.',
      'Filtra los nombres que empiezan por _ si solo quieres la API pública.',
      'Filtrez les noms qui commencent par _ si vous ne voulez que l’API publique.',
    ),
    related: ['help', 'getattr', 'vars'],
  },
]
