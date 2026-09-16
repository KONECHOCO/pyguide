import { L } from './l'
import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'basics',
    title: L('Basi', 'Basics', 'Fundamentos', 'Bases'),
    blurb: L(
      'Stampare, leggere input, variabili e ispezionare gli oggetti.',
      'Print, read input, variables, and inspect objects.',
      'Imprimir, leer entrada, variables e inspeccionar objetos.',
      'Afficher, lire l’entrée, variables et inspecter les objets.',
    ),
    subcategories: [
      { id: 'io', title: L('Input e output', 'Input and output', 'Entrada y salida', 'Entrée et sortie') },
      { id: 'variables', title: L('Variabili', 'Variables', 'Variables', 'Variables') },
      { id: 'inspect', title: L('Ispezione', 'Inspection', 'Inspección', 'Inspection') },
    ],
  },
  {
    id: 'numbers',
    title: L('Numeri', 'Numbers', 'Números', 'Nombres'),
    blurb: L(
      'Interi, decimali, booleani e funzioni matematiche integrate.',
      'Integers, floats, booleans and built-in math functions.',
      'Enteros, decimales, booleanos y funciones matemáticas integradas.',
      'Entiers, flottants, booléens et fonctions mathématiques intégrées.',
    ),
    subcategories: [
      { id: 'num-types', title: L('Tipi numerici', 'Numeric types', 'Tipos numéricos', 'Types numériques') },
      { id: 'math', title: L('Funzioni matematiche', 'Math functions', 'Funciones matemáticas', 'Fonctions mathématiques') },
      { id: 'bases', title: L('Basi e conversioni', 'Bases and conversions', 'Bases y conversiones', 'Bases et conversions') },
    ],
  },
  {
    id: 'text',
    title: L('Testo', 'Text', 'Texto', 'Texte'),
    blurb: L(
      'Stringhe, caratteri, formattazione e metodi più usati.',
      'Strings, characters, formatting and the most used methods.',
      'Cadenas, caracteres, formato y los métodos más usados.',
      'Chaînes, caractères, formatage et méthodes les plus utilisées.',
    ),
    subcategories: [
      { id: 'str-create', title: L('Creazione e caratteri', 'Creation and characters', 'Creación y caracteres', 'Création et caractères') },
      { id: 'str-methods', title: L('Metodi delle stringhe', 'String methods', 'Métodos de cadenas', 'Méthodes de chaînes') },
      { id: 'str-format', title: L('Formattazione', 'Formatting', 'Formato', 'Formatage') },
    ],
  },
  {
    id: 'sequences',
    title: L('Sequenze', 'Sequences', 'Secuencias', 'Séquences'),
    blurb: L(
      'Liste, tuple, range, slicing e operazioni comuni.',
      'Lists, tuples, range, slicing and common operations.',
      'Listas, tuplas, range, slicing y operaciones comunes.',
      'Listes, tuples, range, slicing et opérations courantes.',
    ),
    subcategories: [
      { id: 'lists', title: L('Liste', 'Lists', 'Listas', 'Listes') },
      { id: 'tuples', title: L('Tuple e range', 'Tuples and range', 'Tuplas y range', 'Tuples et range') },
      { id: 'seq-ops', title: L('Operazioni sulle sequenze', 'Sequence operations', 'Operaciones de secuencia', 'Opérations sur les séquences') },
    ],
  },
  {
    id: 'collections',
    title: L('Collezioni', 'Collections', 'Colecciones', 'Collections'),
    blurb: L(
      'Dizionari, insiemi e strutture associative.',
      'Dictionaries, sets and associative structures.',
      'Diccionarios, conjuntos y estructuras asociativas.',
      'Dictionnaires, ensembles et structures associatives.',
    ),
    subcategories: [
      { id: 'dicts', title: L('Dizionari', 'Dictionaries', 'Diccionarios', 'Dictionnaires') },
      { id: 'sets', title: L('Insiemi', 'Sets', 'Conjuntos', 'Ensembles') },
    ],
  },
  {
    id: 'operators',
    title: L('Operatori', 'Operators', 'Operadores', 'Opérateurs'),
    blurb: L(
      'Aritmetica, confronto, identità, bit a bit e assegnazione.',
      'Arithmetic, comparison, identity, bitwise and assignment.',
      'Aritmética, comparación, identidad, bits y asignación.',
      'Arithmétique, comparaison, identité, bits et affectation.',
    ),
    subcategories: [
      { id: 'arithmetic', title: L('Aritmetica', 'Arithmetic', 'Aritmética', 'Arithmétique') },
      { id: 'compare', title: L('Confronto e logica', 'Comparison and logic', 'Comparación y lógica', 'Comparaison et logique') },
      { id: 'assign-bit', title: L('Assegnazione e bit', 'Assignment and bits', 'Asignación y bits', 'Affectation et bits') },
    ],
  },
  {
    id: 'control',
    title: L('Controllo di flusso', 'Control flow', 'Control de flujo', 'Contrôle de flux'),
    blurb: L(
      'Condizioni, cicli, match e parole chiave di controllo.',
      'Conditionals, loops, match and control keywords.',
      'Condiciones, bucles, match y palabras clave de control.',
      'Conditions, boucles, match et mots-clés de contrôle.',
    ),
    subcategories: [
      { id: 'conditions', title: L('Condizioni', 'Conditionals', 'Condiciones', 'Conditions') },
      { id: 'loops', title: L('Cicli', 'Loops', 'Bucles', 'Boucles') },
    ],
  },
  {
    id: 'functions',
    title: L('Funzioni', 'Functions', 'Funciones', 'Fonctions'),
    blurb: L(
      'Definire funzioni, lambda, map/filter e iteratori.',
      'Define functions, lambdas, map/filter and iterators.',
      'Definir funciones, lambda, map/filter e iteradores.',
      'Définir des fonctions, lambdas, map/filter et itérateurs.',
    ),
    subcategories: [
      { id: 'define', title: L('Definizione', 'Definition', 'Definición', 'Définition') },
      { id: 'functional', title: L('Stile funzionale', 'Functional style', 'Estilo funcional', 'Style fonctionnel') },
      { id: 'iterators', title: L('Iteratori', 'Iterators', 'Iteradores', 'Itérateurs') },
    ],
  },
  {
    id: 'oop',
    title: L('Oggetti e classi', 'Objects and classes', 'Objetos y clases', 'Objets et classes'),
    blurb: L(
      'Classi, ereditarietà, property e introspezione.',
      'Classes, inheritance, properties and introspection.',
      'Clases, herencia, property e introspección.',
      'Classes, héritage, property et introspection.',
    ),
    subcategories: [
      { id: 'classes', title: L('Classi', 'Classes', 'Clases', 'Classes') },
      { id: 'members', title: L('Attributi e metodi', 'Attributes and methods', 'Atributos y métodos', 'Attributs et méthodes') },
    ],
  },
  {
    id: 'files',
    title: L('File e percorsi', 'Files and paths', 'Archivos y rutas', 'Fichiers et chemins'),
    blurb: L(
      'Aprire, leggere e scrivere file in modo sicuro.',
      'Open, read and write files safely.',
      'Abrir, leer y escribir archivos de forma segura.',
      'Ouvrir, lire et écrire des fichiers en toute sécurité.',
    ),
    subcategories: [
      { id: 'open-rw', title: L('Lettura e scrittura', 'Read and write', 'Lectura y escritura', 'Lecture et écriture') },
      { id: 'paths', title: L('Percorsi', 'Paths', 'Rutas', 'Chemins') },
    ],
  },
  {
    id: 'errors',
    title: L('Errori', 'Errors', 'Errores', 'Erreurs'),
    blurb: L(
      'try/except, raise, assert e pulizia con finally.',
      'try/except, raise, assert and cleanup with finally.',
      'try/except, raise, assert y limpieza con finally.',
      'try/except, raise, assert et nettoyage avec finally.',
    ),
    subcategories: [
      { id: 'handle', title: L('Gestione', 'Handling', 'Gestión', 'Gestion') },
      { id: 'raise', title: L('Generare errori', 'Raising errors', 'Generar errores', 'Lever des erreurs') },
    ],
  },
  {
    id: 'modules',
    title: L('Moduli', 'Modules', 'Módulos', 'Modules'),
    blurb: L(
      'Importare codice, alias e il blocco principale.',
      'Import code, aliases and the main block.',
      'Importar código, alias y el bloque principal.',
      'Importer du code, alias et le bloc principal.',
    ),
    subcategories: [
      { id: 'import', title: L('Import', 'Import', 'Import', 'Import') },
    ],
  },
  {
    id: 'stdlib',
    title: L('Libreria standard', 'Standard library', 'Biblioteca estándar', 'Bibliothèque standard'),
    blurb: L(
      'math, random, datetime, json, os, sys, re e tools.',
      'math, random, datetime, json, os, sys, re and tools.',
      'math, random, datetime, json, os, sys, re y tools.',
      'math, random, datetime, json, os, sys, re et tools.',
    ),
    subcategories: [
      { id: 'math-random', title: L('Math e random', 'Math and random', 'Math y random', 'Math et random') },
      { id: 'dates-json', title: L('Date e JSON', 'Dates and JSON', 'Fechas y JSON', 'Dates et JSON') },
      { id: 'system', title: L('Sistema', 'System', 'Sistema', 'Système') },
      { id: 'text-tools', title: L('Testo e utilità', 'Text and utilities', 'Texto y utilidades', 'Texte et utilitaires') },
    ],
  },
]
