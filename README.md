# Analizador Sintáctico - Sintaxis y Semántica de los Lenguajes
**UTN FRM - Ingeniería en Sistemas de Información**

## Descripción
Analizador léxico, sintáctico e intérprete construido con ANTLR4 y JavaScript para un lenguaje de manipulación de texto. El analizador realiza:
- Análisis léxico y sintáctico con reporte de errores
- Generación de tabla de lexemas-tokens
- Construcción del árbol sintáctico en formato texto
- Interpretación y ejecución del código fuente

## Requisitos previos
- Node.js v16 o superior
- Java 1.8 o superior (para regenerar el lexer/parser si se modifica la gramática)

## Instalación
1. Clonar el repositorio:
```bash
git clone https://github.com/julisantaella/53499.git
cd 53499
```

2. Instalar dependencias:
```bash
npm install
```

## Ejecución
1. Escribir el código fuente en el archivo `input.txt`
2. Agregar una nueva terminal, tipo Command Prompt (CMD)
3. Ejecutar: (En CMD, no PowerShell)
```bash
npm start
```

## Ejemplos incluidos
Para probar con los ejemplos, copiar el contenido al `input.txt` y ejecutar `npm start`.

| Archivo | Descripción | Resultado esperado |
|---|---|---|
| `ejemplo_valido1.txt` | Variables y transformación de texto | Entrada válida |
| `ejemplo_valido2.txt` | Definición y llamada a función | Entrada válida |
| `ejemplo_invalido1.txt` | Falta punto y coma | Error de sintaxis |
| `ejemplo_invalido2.txt` | Imprimir sin argumentos | Error de sintaxis |

## Estructura del proyecto
```
├── Lenguaje.g4                  # Gramática del lenguaje
├── index.js                     # Programa principal
├── CustomLenguajeVisitor.js     # Intérprete (visitor)
├── generated/                   # Lexer y Parser generados por ANTLR
├── ejemplo_valido1.txt          # Ejemplo válido 1
├── ejemplo_valido2.txt          # Ejemplo válido 2
├── ejemplo_invalido1.txt        # Ejemplo inválido 1
├── ejemplo_invalido2.txt        # Ejemplo inválido 2
└── input.txt                    # Archivo de entrada
```

## Gramática del lenguaje
El lenguaje soporta:
- Declaración de variables: `variable nombre = valor;`
- Transformaciones de texto: `mayusculas`, `minusculas`, `invertir`, `longitud`, `reemplazar`
- Concatenación de cadenas: `variable c = cadena1 + cadena2;`
- Impresión: `imprimir(valor);`
- Funciones con argumentos y retorno