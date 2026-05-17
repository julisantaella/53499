// Generated from Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,21,153,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,5,0,36,8,0,10,0,12,0,39,9,0,
1,0,1,0,1,1,1,1,1,1,3,1,46,8,1,1,2,1,2,1,2,1,2,3,2,52,8,2,1,2,1,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,66,8,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
74,8,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,83,8,5,10,5,12,5,86,9,5,1,6,5,6,89,
8,6,10,6,12,6,92,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,100,8,7,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,
15,3,15,137,8,15,1,16,1,16,1,16,1,16,1,16,5,16,144,8,16,10,16,12,16,147,
9,16,3,16,149,8,16,1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,0,3,1,0,10,14,1,0,17,19,1,0,18,19,152,0,37,1,0,0,0,2,45,1,
0,0,0,4,47,1,0,0,0,6,65,1,0,0,0,8,67,1,0,0,0,10,79,1,0,0,0,12,90,1,0,0,0,
14,99,1,0,0,0,16,101,1,0,0,0,18,109,1,0,0,0,20,111,1,0,0,0,22,118,1,0,0,
0,24,124,1,0,0,0,26,128,1,0,0,0,28,130,1,0,0,0,30,136,1,0,0,0,32,138,1,0,
0,0,34,36,3,2,1,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,
0,38,40,1,0,0,0,39,37,1,0,0,0,40,41,5,0,0,1,41,1,1,0,0,0,42,46,3,4,2,0,43,
46,3,8,4,0,44,46,3,30,15,0,45,42,1,0,0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,
3,1,0,0,0,47,48,5,1,0,0,48,51,5,19,0,0,49,50,5,2,0,0,50,52,3,6,3,0,51,49,
1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,5,3,0,0,54,5,1,0,0,0,55,56,3,18,
9,0,56,57,5,4,0,0,57,58,3,28,14,0,58,59,5,5,0,0,59,66,1,0,0,0,60,61,3,28,
14,0,61,62,5,6,0,0,62,63,3,28,14,0,63,66,1,0,0,0,64,66,3,26,13,0,65,55,1,
0,0,0,65,60,1,0,0,0,65,64,1,0,0,0,66,7,1,0,0,0,67,68,5,7,0,0,68,73,5,19,
0,0,69,70,5,4,0,0,70,71,3,10,5,0,71,72,5,5,0,0,72,74,1,0,0,0,73,69,1,0,0,
0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,5,8,0,0,76,77,3,12,6,0,77,78,5,9,0,0,
78,9,1,0,0,0,79,84,5,19,0,0,80,81,5,3,0,0,81,83,5,19,0,0,82,80,1,0,0,0,83,
86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,11,1,0,0,0,86,84,1,0,0,0,87,89,
3,14,7,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,13,1,
0,0,0,92,90,1,0,0,0,93,100,3,4,2,0,94,100,3,16,8,0,95,100,3,20,10,0,96,100,
3,22,11,0,97,100,3,24,12,0,98,100,3,30,15,0,99,93,1,0,0,0,99,94,1,0,0,0,
99,95,1,0,0,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,15,1,0,0,0,101,
102,5,19,0,0,102,103,5,2,0,0,103,104,3,18,9,0,104,105,5,4,0,0,105,106,3,
28,14,0,106,107,5,5,0,0,107,108,5,3,0,0,108,17,1,0,0,0,109,110,7,0,0,0,110,
19,1,0,0,0,111,112,5,19,0,0,112,113,5,2,0,0,113,114,3,28,14,0,114,115,5,
6,0,0,115,116,3,28,14,0,116,117,5,3,0,0,117,21,1,0,0,0,118,119,5,15,0,0,
119,120,5,4,0,0,120,121,3,26,13,0,121,122,5,5,0,0,122,123,5,3,0,0,123,23,
1,0,0,0,124,125,5,16,0,0,125,126,3,26,13,0,126,127,5,3,0,0,127,25,1,0,0,
0,128,129,7,1,0,0,129,27,1,0,0,0,130,131,7,2,0,0,131,29,1,0,0,0,132,137,
3,22,11,0,133,134,3,32,16,0,134,135,5,3,0,0,135,137,1,0,0,0,136,132,1,0,
0,0,136,133,1,0,0,0,137,31,1,0,0,0,138,139,5,19,0,0,139,148,5,4,0,0,140,
145,3,26,13,0,141,142,5,3,0,0,142,144,3,26,13,0,143,141,1,0,0,0,144,147,
1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,
148,140,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,151,5,5,0,0,151,33,1,
0,0,0,11,37,45,51,65,73,84,90,99,136,145,148];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'variable'", "'='", "';'", "'('", "')'", 
                            "'+'", "'funcion'", "'{'", "'}'", "'mayusculas'", 
                            "'minusculas'", "'longitud'", "'invertir'", 
                            "'reemplazar'", "'imprimir'", "'devolver'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "NUMERO", "TEXTO", "NOMBRE", "WS", "COMENTARIO" ];
    static ruleNames = [ "programa", "sentencia", "declaracion", "expresionValor", 
                         "funcion", "argumentos", "instrucciones", "instruccion", 
                         "operacion_texto", "transformacion", "concatenar", 
                         "impresion", "retorno", "valor", "cadena", "ejecucion", 
                         "llamada" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 557186) !== 0)) {
	            this.state = 34;
	            this.sentencia();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this.match(LenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_sentencia);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.declaracion();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.funcion();
	            break;
	        case 15:
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.ejecucion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(LenguajeParser.T__0);
	        this.state = 48;
	        this.match(LenguajeParser.NOMBRE);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 49;
	            this.match(LenguajeParser.T__1);
	            this.state = 50;
	            this.expresionValor();
	        }

	        this.state = 53;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresionValor() {
	    let localctx = new ExpresionValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_expresionValor);
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.transformacion();
	            this.state = 56;
	            this.match(LenguajeParser.T__3);
	            this.state = 57;
	            this.cadena();
	            this.state = 58;
	            this.match(LenguajeParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.cadena();
	            this.state = 61;
	            this.match(LenguajeParser.T__5);
	            this.state = 62;
	            this.cadena();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.valor();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(LenguajeParser.T__6);
	        this.state = 68;
	        this.match(LenguajeParser.NOMBRE);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 69;
	            this.match(LenguajeParser.T__3);
	            this.state = 70;
	            this.argumentos();
	            this.state = 71;
	            this.match(LenguajeParser.T__4);
	        }

	        this.state = 75;
	        this.match(LenguajeParser.T__7);
	        this.state = 76;
	        this.instrucciones();
	        this.state = 77;
	        this.match(LenguajeParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(LenguajeParser.NOMBRE);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 80;
	            this.match(LenguajeParser.T__2);
	            this.state = 81;
	            this.match(LenguajeParser.NOMBRE);
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 622594) !== 0)) {
	            this.state = 87;
	            this.instruccion();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_instruccion);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.operacion_texto();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
	            this.concatenar();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 96;
	            this.impresion();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 97;
	            this.retorno();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 98;
	            this.ejecucion();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(LenguajeParser.NOMBRE);
	        this.state = 102;
	        this.match(LenguajeParser.T__1);
	        this.state = 103;
	        this.transformacion();
	        this.state = 104;
	        this.match(LenguajeParser.T__3);
	        this.state = 105;
	        this.cadena();
	        this.state = 106;
	        this.match(LenguajeParser.T__4);
	        this.state = 107;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LenguajeParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31744) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LenguajeParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(LenguajeParser.NOMBRE);
	        this.state = 112;
	        this.match(LenguajeParser.T__1);
	        this.state = 113;
	        this.cadena();
	        this.state = 114;
	        this.match(LenguajeParser.T__5);
	        this.state = 115;
	        this.cadena();
	        this.state = 116;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LenguajeParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(LenguajeParser.T__14);
	        this.state = 119;
	        this.match(LenguajeParser.T__3);
	        this.state = 120;
	        this.valor();
	        this.state = 121;
	        this.match(LenguajeParser.T__4);
	        this.state = 122;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LenguajeParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(LenguajeParser.T__15);
	        this.state = 125;
	        this.valor();
	        this.state = 126;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LenguajeParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 917504) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LenguajeParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LenguajeParser.RULE_ejecucion);
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.impresion();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.llamada();
	            this.state = 134;
	            this.match(LenguajeParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	llamada() {
	    let localctx = new LlamadaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LenguajeParser.RULE_llamada);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(LenguajeParser.NOMBRE);
	        this.state = 139;
	        this.match(LenguajeParser.T__3);
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 917504) !== 0)) {
	            this.state = 140;
	            this.valor();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 141;
	                this.match(LenguajeParser.T__2);
	                this.state = 142;
	                this.valor();
	                this.state = 147;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 150;
	        this.match(LenguajeParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.T__0 = 1;
LenguajeParser.T__1 = 2;
LenguajeParser.T__2 = 3;
LenguajeParser.T__3 = 4;
LenguajeParser.T__4 = 5;
LenguajeParser.T__5 = 6;
LenguajeParser.T__6 = 7;
LenguajeParser.T__7 = 8;
LenguajeParser.T__8 = 9;
LenguajeParser.T__9 = 10;
LenguajeParser.T__10 = 11;
LenguajeParser.T__11 = 12;
LenguajeParser.T__12 = 13;
LenguajeParser.T__13 = 14;
LenguajeParser.T__14 = 15;
LenguajeParser.T__15 = 16;
LenguajeParser.NUMERO = 17;
LenguajeParser.TEXTO = 18;
LenguajeParser.NOMBRE = 19;
LenguajeParser.WS = 20;
LenguajeParser.COMENTARIO = 21;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_sentencia = 1;
LenguajeParser.RULE_declaracion = 2;
LenguajeParser.RULE_expresionValor = 3;
LenguajeParser.RULE_funcion = 4;
LenguajeParser.RULE_argumentos = 5;
LenguajeParser.RULE_instrucciones = 6;
LenguajeParser.RULE_instruccion = 7;
LenguajeParser.RULE_operacion_texto = 8;
LenguajeParser.RULE_transformacion = 9;
LenguajeParser.RULE_concatenar = 10;
LenguajeParser.RULE_impresion = 11;
LenguajeParser.RULE_retorno = 12;
LenguajeParser.RULE_valor = 13;
LenguajeParser.RULE_cadena = 14;
LenguajeParser.RULE_ejecucion = 15;
LenguajeParser.RULE_llamada = 16;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(LenguajeParser.EOF, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_sentencia;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	funcion() {
	    return this.getTypedRuleContext(FuncionContext,0);
	};

	ejecucion() {
	    return this.getTypedRuleContext(EjecucionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_declaracion;
    }

	NOMBRE() {
	    return this.getToken(LenguajeParser.NOMBRE, 0);
	};

	expresionValor() {
	    return this.getTypedRuleContext(ExpresionValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_expresionValor;
    }

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterExpresionValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitExpresionValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitExpresionValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_funcion;
    }

	NOMBRE() {
	    return this.getToken(LenguajeParser.NOMBRE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_argumentos;
    }

	NOMBRE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.NOMBRE);
	    } else {
	        return this.getToken(LenguajeParser.NOMBRE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	ejecucion() {
	    return this.getTypedRuleContext(EjecucionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_operacion_texto;
    }

	NOMBRE() {
	    return this.getToken(LenguajeParser.NOMBRE, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_transformacion;
    }


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_concatenar;
    }

	NOMBRE() {
	    return this.getToken(LenguajeParser.NOMBRE, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_impresion;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_retorno;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(LenguajeParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(LenguajeParser.NUMERO, 0);
	};

	NOMBRE() {
	    return this.getToken(LenguajeParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(LenguajeParser.TEXTO, 0);
	};

	NOMBRE() {
	    return this.getToken(LenguajeParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_ejecucion;
    }

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	llamada() {
	    return this.getTypedRuleContext(LlamadaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LlamadaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_llamada;
    }

	NOMBRE() {
	    return this.getToken(LenguajeParser.NOMBRE, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterLlamada(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitLlamada(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitLlamada(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.SentenciaContext = SentenciaContext; 
LenguajeParser.DeclaracionContext = DeclaracionContext; 
LenguajeParser.ExpresionValorContext = ExpresionValorContext; 
LenguajeParser.FuncionContext = FuncionContext; 
LenguajeParser.ArgumentosContext = ArgumentosContext; 
LenguajeParser.InstruccionesContext = InstruccionesContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.Operacion_textoContext = Operacion_textoContext; 
LenguajeParser.TransformacionContext = TransformacionContext; 
LenguajeParser.ConcatenarContext = ConcatenarContext; 
LenguajeParser.ImpresionContext = ImpresionContext; 
LenguajeParser.RetornoContext = RetornoContext; 
LenguajeParser.ValorContext = ValorContext; 
LenguajeParser.CadenaContext = CadenaContext; 
LenguajeParser.EjecucionContext = EjecucionContext; 
LenguajeParser.LlamadaContext = LlamadaContext; 
