import type { Command } from '../types'
import { L } from './l'

export const stdlib: Command[] = [
  {
    id: 'math',
    name: 'math',
    signature: 'import math',
    category: 'stdlib',
    subcategory: 'math-random',
    description: L(
      'Funzioni matematiche su float: radici, logaritmi, trigonometria, costanti pi e e. Per interi grandi usa math.isqrt e math.comb.',
      'Math functions on floats: roots, logs, trigonometry, constants pi and e. For large integers use math.isqrt and math.comb.',
      'Funciones matemáticas sobre float: raíces, logaritmos, trigonometría, constantes pi y e. Para enteros grandes usa math.isqrt y math.comb.',
      'Fonctions mathématiques sur les flottants : racines, logs, trigonométrie, constantes pi et e. Pour les grands entiers, utilisez math.isqrt et math.comb.',
    ),
    examples: [
      { code: 'import math\nprint(math.sqrt(16), math.floor(3.7), math.ceil(3.2))\nprint(round(math.pi, 4), math.factorial(5))', result: '4.0 3 4\n3.1416 120' },
    ],
    related: ['random', 'pow', 'abs'],
  },
  {
    id: 'random',
    name: 'random',
    signature: 'import random',
    category: 'stdlib',
    subcategory: 'math-random',
    description: L(
      'Numeri pseudo-casuali. randint include entrambi gli estremi. choice pesca un elemento. shuffle mescola sul posto. Non è crittografico: per sicurezza usa secrets.',
      'Pseudo-random numbers. randint includes both ends. choice picks an item. shuffle shuffles in place. Not cryptographic: for security use secrets.',
      'Números pseudoaleatorios. randint incluye ambos extremos. choice elige un elemento. shuffle mezcla in situ. No es criptográfico: para seguridad usa secrets.',
      'Nombres pseudo-aléatoires. randint inclut les deux bornes. choice tire un élément. shuffle mélange sur place. Pas cryptographique : pour la sécurité, utilisez secrets.',
    ),
    examples: [
      {
        code: 'import random\nprint(random.choice(["solo"]))\nnums = [3, 1, 2]\nrandom.shuffle(nums)\nprint(sorted(nums))\nprint(1 <= random.randint(1, 6) <= 6)',
        result: 'solo\n[1, 2, 3]\nTrue',
      },
    ],
    tip: L(
      'Fissa random.seed(n) nei test per risultati riproducibili. Non usarlo per password o token.',
      'Fix random.seed(n) in tests for reproducible results. Do not use it for passwords or tokens.',
      'Fija random.seed(n) en los tests para resultados reproducibles. No lo uses para contraseñas o tokens.',
      'Fixez random.seed(n) dans les tests pour des résultats reproductibles. Ne l’utilisez pas pour des mots de passe ou des jetons.',
    ),
    related: ['math'],
  },
  {
    id: 'datetime',
    name: 'datetime',
    signature: 'from datetime import datetime, date, timedelta',
    category: 'stdlib',
    subcategory: 'dates-json',
    description: L(
      'Date e orari. datetime.now() è l’istante locale. timedelta è una durata. strftime formatta, strptime analizza una stringa.',
      'Dates and times. datetime.now() is the local instant. timedelta is a duration. strftime formats, strptime parses a string.',
      'Fechas y horas. datetime.now() es el instante local. timedelta es una duración. strftime formatea, strptime analiza una cadena.',
      'Dates et heures. datetime.now() est l’instant local. timedelta est une durée. strftime formate, strptime analyse une chaîne.',
    ),
    examples: [
      {
        code: 'from datetime import date, timedelta\nd = date(2026, 9, 16)\nprint(d.isoformat())\nprint((d + timedelta(days=2)).weekday())',
        result: '2026-09-16\n4',
      },
    ],
    tip: L(
      'Per fusi orari usa datetime.timezone o zoneinfo.ZoneInfo. Evita di mescolare naive e aware.',
      'For time zones use datetime.timezone or zoneinfo.ZoneInfo. Avoid mixing naive and aware datetimes.',
      'Para zonas horarias usa datetime.timezone o zoneinfo.ZoneInfo. Evita mezclar naive y aware.',
      'Pour les fuseaux, utilisez datetime.timezone ou zoneinfo.ZoneInfo. Évitez de mélanger naive et aware.',
    ),
    related: ['jsonmod'],
  },
  {
    id: 'jsonmod',
    name: 'json',
    signature: 'import json',
    category: 'stdlib',
    subcategory: 'dates-json',
    description: L(
      'Serializza strutture Python in JSON e viceversa. dumps/loads lavorano su stringhe; dump/load su file.',
      'Serializes Python structures to JSON and back. dumps/loads work on strings; dump/load on files.',
      'Serializa estructuras Python a JSON y viceversa. dumps/loads trabajan con cadenas; dump/load con archivos.',
      'Sérialise des structures Python en JSON et inversement. dumps/loads travaillent sur des chaînes ; dump/load sur des fichiers.',
    ),
    examples: [
      {
        code: 'import json\ndata = {"ok": True, "n": 3}\ntext = json.dumps(data)\nprint(text)\nprint(json.loads(text)["n"])',
        result: '{"ok": true, "n": 3}\n3',
      },
    ],
    tip: L(
      'JSON ha true/false/null, non True/False/None. Le chiavi devono essere stringhe. ensure_ascii=False conserva Unicode.',
      'JSON has true/false/null, not True/False/None. Keys must be strings. ensure_ascii=False keeps Unicode.',
      'JSON tiene true/false/null, no True/False/None. Las claves deben ser cadenas. ensure_ascii=False conserva Unicode.',
      'JSON a true/false/null, pas True/False/None. Les clés doivent être des chaînes. ensure_ascii=False conserve Unicode.',
    ),
    related: ['dict', 'open'],
  },
  {
    id: 'osmod',
    name: 'os / sys',
    signature: 'import os, sys',
    category: 'stdlib',
    subcategory: 'system',
    description: L(
      'os parla con il sistema operativo (env, processi, directory). sys espone argv, versione, path e stdout. Per i percorsi preferisci pathlib.',
      'os talks to the OS (env, processes, directories). sys exposes argv, version, path and stdout. For paths prefer pathlib.',
      'os habla con el sistema operativo (env, procesos, directorios). sys expone argv, versión, path y stdout. Para rutas prefiere pathlib.',
      'os parle au système (env, processus, répertoires). sys expose argv, version, path et stdout. Pour les chemins, préférez pathlib.',
    ),
    examples: [
      {
        code: 'import sys, os\nprint(sys.version_info.major)\nprint("PATH" in os.environ)',
        result: '3\nTrue',
      },
    ],
    related: ['pathlib', 'main'],
  },
  {
    id: 're',
    name: 're',
    signature: 'import re',
    category: 'stdlib',
    subcategory: 'text-tools',
    description: L(
      'Espressioni regolari: search trova, findall elenca, sub sostituisce, compile riusa il pattern. Usa r"..." per le stringhe raw.',
      'Regular expressions: search finds, findall lists, sub replaces, compile reuses the pattern. Use r"..." for raw strings.',
      'Expresiones regulares: search encuentra, findall lista, sub sustituye, compile reutiliza el patrón. Usa r"..." para cadenas raw.',
      'Expressions régulières : search trouve, findall liste, sub remplace, compile réutilise le motif. Utilisez r"..." pour les chaînes brutes.',
    ),
    examples: [
      {
        code: 'import re\nprint(re.findall(r"\\d+", "a12 b3"))\nprint(re.sub(r"\\s+", "-", "uno  due"))\nprint(bool(re.search(r"^Py", "Python")))',
        result: "['12', '3']\nuno-due\nTrue",
      },
    ],
    tip: L(
      'Per ricerche semplici preferisci in, startswith, split. Le regex sono potenti ma più difficili da mantenere.',
      'For simple searches prefer in, startswith, split. Regexes are powerful but harder to maintain.',
      'Para búsquedas simples prefiere in, startswith, split. Las regex son potentes pero más difíciles de mantener.',
      'Pour des recherches simples, préférez in, startswith, split. Les regex sont puissantes mais plus difficiles à maintenir.',
    ),
    related: ['find', 'replace', 'split'],
  },
  {
    id: 'counter',
    name: 'collections',
    signature: 'from collections import Counter, defaultdict, deque, namedtuple',
    category: 'stdlib',
    subcategory: 'text-tools',
    description: L(
      'Strutture extra: Counter conta, defaultdict crea valori al volo, deque è una coda a due estremi, namedtuple è una tupla con campi.',
      'Extra structures: Counter counts, defaultdict creates values on the fly, deque is a double-ended queue, namedtuple is a tuple with fields.',
      'Estructuras extra: Counter cuenta, defaultdict crea valores al vuelo, deque es una cola de dos extremos, namedtuple es una tupla con campos.',
      'Structures extra : Counter compte, defaultdict crée des valeurs à la volée, deque est une file à deux bouts, namedtuple est un tuple avec champs.',
    ),
    examples: [
      {
        code: 'from collections import Counter, defaultdict\nprint(Counter("banana"))\nd = defaultdict(int)\nd["a"] += 1\nprint(dict(d))',
        result: "Counter({'a': 3, 'n': 2, 'b': 1})\n{'a': 1}",
      },
    ],
    related: ['dict', 'set', 'itertools'],
  },
  {
    id: 'itertools',
    name: 'itertools',
    signature: 'import itertools',
    category: 'stdlib',
    subcategory: 'text-tools',
    description: L(
      'Iteratori efficienti: chain concatena, cycle ripete, islice taglia, product fa il prodotto cartesiano, combinations le combinazioni.',
      'Efficient iterators: chain concatenates, cycle repeats, islice slices, product is the cartesian product, combinations are combinations.',
      'Iteradores eficientes: chain concatena, cycle repite, islice recorta, product es el producto cartesiano, combinations las combinaciones.',
      'Itérateurs efficaces : chain concatène, cycle répète, islice découpe, product est le produit cartésien, combinations les combinaisons.',
    ),
    examples: [
      {
        code: 'import itertools as it\nprint(list(it.chain([1, 2], [3])))\nprint(list(it.islice(it.count(10), 3)))\nprint(list(it.combinations("abc", 2)))',
        result: "[1, 2, 3]\n[10, 11, 12]\n[('a', 'b'), ('a', 'c'), ('b', 'c')]",
      },
    ],
    related: ['zip', 'map', 'counter'],
  },
  {
    id: 'hash',
    name: 'hash()',
    signature: 'hash(object)',
    category: 'stdlib',
    subcategory: 'text-tools',
    description: L(
      'Hash intero usato da set e dict. Funziona solo su oggetti immutabili (o che definiscono __hash__). Non è stabile tra esecuzioni dal 3.3 (salt).',
      'Integer hash used by sets and dicts. Works only on immutable objects (or those defining __hash__). Not stable across runs since 3.3 (salt).',
      'Hash entero usado por set y dict. Solo funciona en objetos inmutables (o que definen __hash__). No es estable entre ejecuciones desde 3.3 (salt).',
      'Hachage entier utilisé par set et dict. Fonctionne seulement sur les objets immuables (ou qui définissent __hash__). Pas stable entre exécutions depuis 3.3 (sel).',
    ),
    examples: [
      { code: 'print(hash("a") == hash("a"))\nprint(hash((1, 2)) == hash((1, 2)))', result: 'True\nTrue' },
    ],
    related: ['dict', 'set', 'id'],
  },
]
