import LenguajeVisitor from './generated/LenguajeVisitor.js';

export default class CustomLenguajeVisitor extends LenguajeVisitor {

    constructor() {
        super();
        this.memoria = new Map();
        this.funciones = new Map();
    }

    // ─── PROGRAMA ───────────────────────────────────────────
    visitPrograma(ctx) {
        for (let i = 0; i < ctx.sentencia().length; i++) {
            this.visit(ctx.sentencia(i));
        }
    }

    visitSentencia(ctx) {
        return this.visitChildren(ctx);
    }

    // ─── DECLARACIÓN DE VARIABLE ────────────────────────────
    visitDeclaracion(ctx) {
        const nombre = ctx.NOMBRE().getText();
        let valor = null;
        if (ctx.expresionValor()) {
            valor = this.visit(ctx.expresionValor());
        }
        this.memoria.set(nombre, valor);
        console.log(`  Variable declarada: ${nombre} = ${valor}`);
    }

    // ─── EXPRESIÓN VALOR ────────────────────────────────────
    visitExpresionValor(ctx) {
        // caso: transformacion '(' cadena ')'
        if (ctx.transformacion()) {
            const transformacion = ctx.transformacion().getText();
            const cadenaValor = this.visit(ctx.cadena(0));
            return this.aplicarTransformacion(transformacion, cadenaValor);
        }
        // caso: cadena '+' cadena
        if (ctx.cadena().length === 2) {
            const izq = this.visit(ctx.cadena(0));
            const der = this.visit(ctx.cadena(1));
            return izq + der;
        }
        // caso: valor simple
        if (ctx.valor()) {
            return this.visit(ctx.valor());
        }
    }

    // ─── DEFINICIÓN DE FUNCIÓN ──────────────────────────────
    visitFuncion(ctx) {
        const nombre = ctx.NOMBRE().getText();
        this.funciones.set(nombre, ctx);
        console.log(`  Función definida: ${nombre}`);
    }

    // ─── INSTRUCCIONES ──────────────────────────────────────
    visitInstrucciones(ctx) {
        for (let i = 0; i < ctx.instruccion().length; i++) {
            this.visit(ctx.instruccion(i));
        }
    }

    visitInstruccion(ctx) {
        return this.visitChildren(ctx);
    }

    // ─── OPERACIÓN DE TEXTO ─────────────────────────────────
    visitOperacion_texto(ctx) {
        const nombre = ctx.NOMBRE().getText();
        const transformacion = ctx.transformacion().getText();
        const cadenaValor = this.visit(ctx.cadena());
        const resultado = this.aplicarTransformacion(transformacion, cadenaValor);
        this.memoria.set(nombre, resultado);
        console.log(`  ${nombre} = ${transformacion}("${cadenaValor}") => ${resultado}`);
    }

    // ─── HELPER TRANSFORMACIONES ────────────────────────────
    aplicarTransformacion(transformacion, cadenaValor) {
        switch (transformacion) {
            case 'mayusculas':
                return String(cadenaValor).toUpperCase();
            case 'minusculas':
                return String(cadenaValor).toLowerCase();
            case 'longitud':
                return String(cadenaValor).length;
            case 'invertir':
                return String(cadenaValor).split('').reverse().join('');
            case 'reemplazar':
                return cadenaValor;
            default:
                return cadenaValor;
        }
    }

    // ─── CONCATENAR ─────────────────────────────────────────
    visitConcatenar(ctx) {
        const nombre = ctx.NOMBRE().getText();
        const cadenas = ctx.cadena();
        const izq = this.visit(cadenas[0]);
        const der = this.visit(cadenas[1]);
        const resultado = izq + der;
        this.memoria.set(nombre, resultado);
        console.log(`  ${nombre} = "${izq}" + "${der}" => "${resultado}"`);
    }

    // ─── IMPRESIÓN ──────────────────────────────────────────
    visitImpresion(ctx) {
        const valor = this.visit(ctx.valor());
        console.log(`  >> ${valor}`);
    }

    // ─── RETORNO ────────────────────────────────────────────
    visitRetorno(ctx) {
        return this.visit(ctx.valor());
    }

    // ─── EJECUCIÓN ──────────────────────────────────────────
    visitEjecucion(ctx) {
        return this.visitChildren(ctx);
    }

visitLlamada(ctx) {
    const nombre = ctx.NOMBRE().getText();
    if (this.funciones.has(nombre)) {
        const funcCtx = this.funciones.get(nombre);
        
        const parametros = funcCtx.argumentos() 
            ? funcCtx.argumentos().NOMBRE().map(n => n.getText())
            : [];
        
        const valores = ctx.valor 
            ? ctx.valor().map(v => this.visit(v))
            : [];
        
        const memoriaAnterior = new Map(this.memoria);
        
        parametros.forEach((param, i) => {
            this.memoria.set(param, valores[i]);
        });
        
        this.visit(funcCtx.instrucciones());
        
        this.memoria = memoriaAnterior;
        
    } else {
        console.log(`  Error: función "${nombre}" no definida`);
    }
}

    // ─── VALORES ────────────────────────────────────────────
    visitValor(ctx) {
        if (ctx.TEXTO()) {
            return ctx.TEXTO().getText().slice(1, -1);
        }
        if (ctx.NUMERO()) {
            return Number(ctx.NUMERO().getText());
        }
        if (ctx.NOMBRE()) {
            const nombre = ctx.NOMBRE().getText();
            if (this.memoria.has(nombre)) {
                return this.memoria.get(nombre);
            }
            console.log(`  Error: variable "${nombre}" no declarada`);
            return null;
        }
    }

    visitCadena(ctx) {
        if (ctx.TEXTO()) {
            return ctx.TEXTO().getText().slice(1, -1);
        }
        if (ctx.NOMBRE()) {
            const nombre = ctx.NOMBRE().getText();
            if (this.memoria.has(nombre)) {
                return this.memoria.get(nombre);
            }
            console.log(`  Error: variable "${nombre}" no declarada`);
            return null;
        }
    }

    visitTransformacion(ctx) {
        return ctx.getText();
    }
}