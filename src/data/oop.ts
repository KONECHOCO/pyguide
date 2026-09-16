import type { Command } from '../types'
import { L } from './l'

export const oop: Command[] = [
  {
    id: 'class',
    name: 'class',
    signature: 'class Nome(Base):\n    def __init__(self, ...):\n        ...',
    category: 'oop',
    subcategory: 'classes',
    description: L(
      'Definisce un tipo. __init__ inizializza l’istanza. self è l’istanza corrente e va dichiarato come primo parametro dei metodi di istanza.',
      'Defines a type. __init__ initializes the instance. self is the current instance and must be declared as the first parameter of instance methods.',
      'Define un tipo. __init__ inicializa la instancia. self es la instancia actual y se declara como primer parámetro de los métodos de instancia.',
      'Définit un type. __init__ initialise l’instance. self est l’instance courante et doit être déclaré comme premier paramètre des méthodes d’instance.',
    ),
    examples: [
      {
        code: 'class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def dist(self):\n        return (self.x ** 2 + self.y ** 2) ** 0.5\np = Point(3, 4)\nprint(p.x, p.dist())',
        result: '3 5.0',
      },
    ],
    related: ['super', 'property', 'isinstance'],
  },
  {
    id: 'super',
    name: 'super()',
    signature: 'super().method(...)',
    category: 'oop',
    subcategory: 'classes',
    description: L(
      'Accede al metodo della classe base secondo il MRO. Nelle classi cooperative va chiamato in __init__ per inizializzare i genitori.',
      'Accesses the base-class method according to the MRO. In cooperative classes it should be called in __init__ to initialize parents.',
      'Accede al método de la clase base según el MRO. En clases cooperativas se llama en __init__ para inicializar a los padres.',
      'Accède à la méthode de la classe de base selon le MRO. Dans les classes coopératives, appelez-le dans __init__ pour initialiser les parents.',
    ),
    examples: [
      {
        code: 'class Animal:\n    def speak(self):\n        return "..."\nclass Dog(Animal):\n    def speak(self):\n        return super().speak() + " bau"\nprint(Dog().speak())',
        result: '... bau',
      },
    ],
    related: ['class', 'issubclass'],
  },
  {
    id: 'issubclass',
    name: 'issubclass()',
    signature: 'issubclass(class, classinfo)',
    category: 'oop',
    subcategory: 'classes',
    description: L(
      'True se class è sottoclasse di classinfo (o di una delle classi in una tupla). Una classe è sottoclasse di se stessa.',
      'True if class is a subclass of classinfo (or of one of the classes in a tuple). A class is a subclass of itself.',
      'True si class es subclase de classinfo (o de una de las clases de una tupla). Una clase es subclase de sí misma.',
      'True si class est une sous-classe de classinfo (ou de l’une des classes d’un tuple). Une classe est sous-classe d’elle-même.',
    ),
    examples: [
      { code: 'print(issubclass(bool, int))\nprint(issubclass(int, object))', result: 'True\nTrue' },
    ],
    related: ['isinstance', 'class', 'super'],
  },
  {
    id: 'property',
    name: 'property()',
    signature: '@property  @x.setter  @x.deleter',
    category: 'oop',
    subcategory: 'members',
    description: L(
      'Espone un metodo come attributo. Permette validazione e calcolo al volo senza cambiare l’API pubblica.',
      'Exposes a method as an attribute. Allows validation and on-the-fly computation without changing the public API.',
      'Expone un método como atributo. Permite validación y cálculo al vuelo sin cambiar la API pública.',
      'Expose une méthode comme attribut. Permet validation et calcul à la volée sans changer l’API publique.',
    ),
    examples: [
      {
        code: 'class Temp:\n    def __init__(self, c):\n        self._c = c\n    @property\n    def f(self):\n        return self._c * 9 / 5 + 32\nprint(Temp(0).f)',
        result: '32.0',
      },
    ],
    related: ['class', 'staticmethod'],
  },
  {
    id: 'staticmethod',
    name: 'staticmethod / classmethod',
    signature: '@staticmethod  @classmethod',
    category: 'oop',
    subcategory: 'members',
    description: L(
      'staticmethod non riceve né istanza né classe. classmethod riceve la classe (cls) ed è ideale per costruttori alternativi.',
      'staticmethod receives neither instance nor class. classmethod receives the class (cls) and is ideal for alternative constructors.',
      'staticmethod no recibe ni instancia ni clase. classmethod recibe la clase (cls) y es ideal para constructores alternativos.',
      'staticmethod ne reçoit ni instance ni classe. classmethod reçoit la classe (cls) et convient aux constructeurs alternatifs.',
    ),
    examples: [
      {
        code: 'class User:\n    def __init__(self, name):\n        self.name = name\n    @classmethod\n    def anonymous(cls):\n        return cls("guest")\nprint(User.anonymous().name)',
        result: 'guest',
      },
    ],
    related: ['property', 'class'],
  },
  {
    id: 'getattr',
    name: 'getattr() / setattr() / hasattr() / delattr()',
    signature: 'getattr(obj, name[, default])  setattr(obj, name, value)',
    category: 'oop',
    subcategory: 'members',
    description: L(
      'Accesso dinamico agli attributi per nome. hasattr verifica l’esistenza. delattr elimina. getattr con default evita AttributeError.',
      'Dynamic access to attributes by name. hasattr checks existence. delattr deletes. getattr with default avoids AttributeError.',
      'Acceso dinámico a atributos por nombre. hasattr comprueba existencia. delattr elimina. getattr con default evita AttributeError.',
      'Accès dynamique aux attributs par nom. hasattr vérifie l’existence. delattr supprime. getattr avec default évite AttributeError.',
    ),
    examples: [
      {
        code: 'class Box:\n    pass\nb = Box()\nsetattr(b, "n", 7)\nprint(getattr(b, "n"), hasattr(b, "n"))',
        result: '7 True',
      },
    ],
    related: ['dir', 'vars', 'property'],
  },
  {
    id: 'vars',
    name: 'vars() / locals() / globals()',
    signature: 'vars([object])  locals()  globals()',
    category: 'oop',
    subcategory: 'members',
    description: L(
      'vars(obj) è di solito obj.__dict__. locals() e globals() sono i namespace corrente e del modulo.',
      'vars(obj) is usually obj.__dict__. locals() and globals() are the current and module namespaces.',
      'vars(obj) suele ser obj.__dict__. locals() y globals() son los espacios de nombres actual y del módulo.',
      'vars(obj) est en général obj.__dict__. locals() et globals() sont les espaces de noms courant et du module.',
    ),
    examples: [
      {
        code: 'class P:\n    def __init__(self):\n        self.x = 1\nprint(vars(P()))',
        result: "{'x': 1}",
      },
    ],
    related: ['dir', 'getattr'],
  },
]
