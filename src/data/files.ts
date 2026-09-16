import type { Command } from '../types'
import { L } from './l'

export const files: Command[] = [
  {
    id: 'open',
    name: 'open()',
    signature: 'open(file, mode="r", encoding=None, newline=None)',
    category: 'files',
    subcategory: 'open-rw',
    description: L(
      'Apre un file e restituisce un handle. mode: r lettura, w scrittura (tronca), a append, x crea, b binario, t testo, + aggiornamento.',
      'Opens a file and returns a handle. mode: r read, w write (truncates), a append, x create, b binary, t text, + update.',
      'Abre un archivo y devuelve un handle. mode: r lectura, w escritura (trunca), a append, x crea, b binario, t texto, + actualización.',
      'Ouvre un fichier et renvoie un handle. mode : r lecture, w écriture (tronque), a append, x création, b binaire, t texte, + mise à jour.',
    ),
    examples: [
      {
        code: 'from pathlib import Path\np = Path("demo.txt")\np.write_text("ciao\\n", encoding="utf-8")\nprint(p.read_text(encoding="utf-8"))',
        result: 'ciao',
      },
    ],
    tip: L(
      'Specifica sempre encoding="utf-8" in testo. Altrimenti dipende dalla piattaforma. Preferisci with per chiudere il file.',
      'Always specify encoding="utf-8" in text mode. Otherwise it depends on the platform. Prefer with to close the file.',
      'Especifica siempre encoding="utf-8" en texto. Si no, depende de la plataforma. Prefiere with para cerrar el archivo.',
      'Spécifiez toujours encoding="utf-8" en texte. Sinon cela dépend de la plateforme. Préférez with pour fermer le fichier.',
    ),
    related: ['with', 'pathlib', 'readwrite'],
  },
  {
    id: 'readwrite',
    name: 'read() / write()',
    signature: 'f.read()  f.readline()  f.readlines()  f.write(s)  f.writelines(lines)',
    category: 'files',
    subcategory: 'open-rw',
    description: L(
      'read legge tutto (o n caratteri). readline una riga. write scrive una stringa e restituisce il numero di caratteri scritti.',
      'read reads everything (or n characters). readline one line. write writes a string and returns how many characters were written.',
      'read lee todo (o n caracteres). readline una línea. write escribe una cadena y devuelve cuántos caracteres se escribieron.',
      'read lit tout (ou n caractères). readline une ligne. write écrit une chaîne et renvoie le nombre de caractères écrits.',
    ),
    examples: [
      {
        code: 'from io import StringIO\nf = StringIO("a\\nb\\n")\nprint(f.readline().strip())\nprint(f.read())',
        result: 'a\nb',
      },
    ],
    related: ['open', 'with'],
  },
  {
    id: 'with',
    name: 'with',
    signature: 'with context as name:\n    ...',
    category: 'files',
    subcategory: 'open-rw',
    description: L(
      'Context manager: entra nel contesto e garantisce la pulizia (chiusura file, lock, connessioni) anche se c’è un’eccezione.',
      'Context manager: enters the context and guarantees cleanup (file close, locks, connections) even if an exception occurs.',
      'Context manager: entra en el contexto y garantiza la limpieza (cierre de archivo, lock, conexiones) aunque haya una excepción.',
      'Gestionnaire de contexte : entre dans le contexte et garantit le nettoyage (fermeture de fichier, verrous, connexions) même en cas d’exception.',
    ),
    examples: [
      {
        code: 'from io import StringIO\nwith StringIO("hello") as f:\n    print(f.read())',
        result: 'hello',
      },
    ],
    related: ['open', 'try', 'pathlib'],
  },
  {
    id: 'pathlib',
    name: 'pathlib.Path',
    signature: 'from pathlib import Path',
    category: 'files',
    subcategory: 'paths',
    description: L(
      'API orientata agli oggetti per i percorsi. Funziona su Windows e Unix. Preferiscila a os.path per codice nuovo.',
      'Object-oriented API for paths. Works on Windows and Unix. Prefer it over os.path for new code.',
      'API orientada a objetos para rutas. Funciona en Windows y Unix. Prefiérela a os.path para código nuevo.',
      'API orientée objet pour les chemins. Fonctionne sur Windows et Unix. Préférez-la à os.path pour le code nouveau.',
    ),
    examples: [
      {
        code: 'from pathlib import PurePosixPath\np = PurePosixPath("data") / "file.txt"\nprint(p.name, p.suffix)\nprint(p.with_suffix(".json"))',
        result: 'file.txt .txt\ndata/file.json',
      },
    ],
    related: ['open', 'osmod'],
  },
]

export const errors: Command[] = [
  {
    id: 'try',
    name: 'try / except / else / finally',
    signature: 'try:\n    ...\nexcept Error as e:\n    ...\nelse:\n    ...\nfinally:\n    ...',
    category: 'errors',
    subcategory: 'handle',
    description: L(
      'try esegue il codice. except cattura eccezioni. else gira se non c’è errore. finally gira sempre (pulizia).',
      'try runs the code. except catches exceptions. else runs if there was no error. finally always runs (cleanup).',
      'try ejecuta el código. except captura excepciones. else corre si no hubo error. finally corre siempre (limpieza).',
      'try exécute le code. except capture les exceptions. else s’exécute s’il n’y a pas d’erreur. finally s’exécute toujours (nettoyage).',
    ),
    examples: [
      {
        code: 'def parse(s):\n    try:\n        return int(s)\n    except ValueError:\n        return None\n    finally:\n        pass\nprint(parse("9"), parse("x"))',
        result: '9 None',
      },
    ],
    tip: L(
      'Cattura eccezioni specifiche, non bare except:. Non silenziare Errori inattesi: rende il debug impossibile.',
      'Catch specific exceptions, not bare except:. Do not swallow unexpected errors: it makes debugging impossible.',
      'Captura excepciones específicas, no except: vacío. No silencies errores inesperados: hace imposible depurar.',
      'Attrapez des exceptions précises, pas un except: nu. Ne faites pas taire les erreurs inattendues : le débogage devient impossible.',
    ),
    related: ['raise', 'assert', 'with'],
  },
  {
    id: 'raise',
    name: 'raise',
    signature: 'raise Exception("messaggio")  raise  raise from',
    category: 'errors',
    subcategory: 'raise',
    description: L(
      'Lancia un’eccezione. raise da solo rilancia quella corrente. raise ... from e collega la causa (Python 3).',
      'Raises an exception. bare raise re-raises the current one. raise ... from e chains the cause (Python 3).',
      'Lanza una excepción. raise solo relanza la actual. raise ... from e encadena la causa (Python 3).',
      'Lève une exception. raise seul relance l’exception courante. raise ... from e enchaîne la cause (Python 3).',
    ),
    examples: [
      {
        code: 'def positive(n):\n    if n < 0:\n        raise ValueError("n deve essere >= 0")\n    return n\ntry:\n    positive(-1)\nexcept ValueError as e:\n    print(e)',
        result: 'n deve essere >= 0',
      },
    ],
    related: ['try', 'assert'],
  },
  {
    id: 'assert',
    name: 'assert',
    signature: 'assert condizione, messaggio',
    category: 'errors',
    subcategory: 'raise',
    description: L(
      'Se la condizione è falsa, alza AssertionError. Si disattiva con python -O: non usarlo per validare input utente.',
      'If the condition is false, raises AssertionError. Disabled with python -O: do not use it to validate user input.',
      'Si la condición es falsa, lanza AssertionError. Se desactiva con python -O: no lo uses para validar entrada de usuario.',
      'Si la condition est fausse, lève AssertionError. Désactivé avec python -O : ne l’utilisez pas pour valider une entrée utilisateur.',
    ),
    examples: [
      {
        code: 'x = 4\nassert x % 2 == 0, "x deve essere pari"\nprint("ok")',
        result: 'ok',
      },
    ],
    related: ['raise', 'try'],
  },
]

export const modules: Command[] = [
  {
    id: 'import',
    name: 'import',
    signature: 'import modulo  import modulo as alias  from modulo import nome',
    category: 'modules',
    subcategory: 'import',
    description: L(
      'Carica un modulo nel namespace. as crea un alias. from importa nomi specifici. Evita from module import * nel codice reale.',
      'Loads a module into the namespace. as creates an alias. from imports specific names. Avoid from module import * in real code.',
      'Carga un módulo en el espacio de nombres. as crea un alias. from importa nombres concretos. Evita from module import * en código real.',
      'Charge un module dans l’espace de noms. as crée un alias. from importe des noms précis. Évitez from module import * dans le vrai code.',
    ),
    examples: [
      { code: 'import math as m\nfrom math import pi, sqrt\nprint(m.ceil(2.1), round(pi, 2), sqrt(9))', result: '3 3.14 3.0' },
    ],
    related: ['main', 'math', 'osmod'],
  },
  {
    id: 'main',
    name: '__name__ == "__main__"',
    signature: 'if __name__ == "__main__":',
    category: 'modules',
    subcategory: 'import',
    description: L(
      'Il blocco gira solo se il file è eseguito come script, non quando è importato. Punto d’ingresso standard dei programmi Python.',
      'The block runs only if the file is executed as a script, not when it is imported. Standard entry point of Python programs.',
      'El bloque corre solo si el archivo se ejecuta como script, no cuando se importa. Punto de entrada estándar de los programas Python.',
      'Le bloc s’exécute seulement si le fichier est lancé comme script, pas lorsqu’il est importé. Point d’entrée standard des programmes Python.',
    ),
    examples: [
      {
        code: 'def main():\n    print("avvio")\nif __name__ == "__main__":\n    main()',
        result: 'avvio',
      },
    ],
    related: ['import', 'osmod'],
  },
]
