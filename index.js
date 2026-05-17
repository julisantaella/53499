import { CharStreams, CommonTokenStream } from 'antlr4';
import LenguajeLexer from './generated/LenguajeLexer.js';
import LenguajeParser from './generated/LenguajeParser.js';
import CustomLenguajeVisitor from './CustomLenguajeVisitor.js';
import fs from 'fs';

function main() {
    // Leer el archivo de entrada
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("No se pudo leer input.txt");
        process.exit(1);
    }

    // Análisis léxico
    const inputStream = CharStreams.fromString(input);
    const lexer = new LenguajeLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill(); // cargar todos los tokens

    // Mapa de nombres descriptivos
    const nombresLiterales = {
        'variable'   : 'PALABRA_RESERVADA',
        'funcion'    : 'PALABRA_RESERVADA',
        'imprimir'   : 'PALABRA_RESERVADA',
        'devolver'   : 'PALABRA_RESERVADA',
        'mayusculas' : 'TRANSFORMACION',
        'minusculas' : 'TRANSFORMACION',
        'longitud'   : 'TRANSFORMACION',
        'invertir'   : 'TRANSFORMACION',
        'reemplazar' : 'TRANSFORMACION',
        '='          : 'ASIGNACION',
        ';'          : 'PUNTO_COMA',
        '('          : 'PAREN_IZQ',
        ')'          : 'PAREN_DER',
        '{'          : 'LLAVE_IZQ',
        '}'          : 'LLAVE_DER',
        '+'          : 'CONCATENACION',
    };

    // Tabla de lexemas-tokens
    console.log("\n---------------------------------");
    console.log("     TABLA DE LEXEMAS-TOKENS     ");
    console.log("---------------------------------");
    console.log("Lexema".padEnd(20) + "Token");
    console.log("-".repeat(37));
    tokenStream.tokens.forEach(token => {
        if (token.type !== -1) { // ignorar EOF
            const texto = token.text;
            const nombreToken = nombresLiterales[texto]
                || LenguajeParser.symbolicNames[token.type]
                || token.type;
            console.log(texto.padEnd(20) + nombreToken);
        }
    });

    // Análisis sintáctico
    const parser = new LenguajeParser(tokenStream);
    const tree = parser.programa();

    console.log("\n---------------------------------");
    console.log("       ÁRBOL SINTÁCTICO          ");
    console.log("---------------------------------");

    if (parser.syntaxErrorsCount > 0) {
        console.error("Se encontraron errores de sintaxis.");
    } else {
        console.log("\nEntrada válida.");
        console.log(tree.toStringTree(parser.ruleNames));

        // Interpretación
        console.log("\n---------------------------------");
        console.log("       INTERPRETACIÓN            ");
        console.log("---------------------------------");
        const visitor = new CustomLenguajeVisitor();
        visitor.visit(tree);
    }
}

main();