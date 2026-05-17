grammar Lenguaje;

programa
    : sentencia* EOF
    ;

sentencia
    : declaracion
    | funcion
    | ejecucion
    ;

declaracion
    : 'variable' NOMBRE ('=' expresionValor)? ';'
    ;

expresionValor
    : transformacion '(' cadena ')'
    | cadena '+' cadena
    | valor
    ;

funcion
    : 'funcion' NOMBRE ('(' argumentos ')')? '{' instrucciones '}'
    ;

argumentos
    : NOMBRE (';' NOMBRE)*
    ;

instrucciones
    : instruccion*
    ;

instruccion
    : declaracion
    | operacion_texto
    | concatenar
    | impresion
    | retorno
    | ejecucion
    ;

operacion_texto
    : NOMBRE '=' transformacion '(' cadena ')' ';'
    ;

transformacion
    : 'mayusculas'
    | 'minusculas'
    | 'longitud'
    | 'invertir'
    | 'reemplazar'
    ;

concatenar
    : NOMBRE '=' cadena '+' cadena ';'
    ;

impresion
    : 'imprimir' '(' valor ')' ';'
    ;

retorno
    : 'devolver' valor ';'
    ;

valor
    : TEXTO
    | NUMERO
    | NOMBRE
    ;

cadena
    : TEXTO
    | NOMBRE
    ;

ejecucion
    : impresion
    | llamada ';'
    ;

llamada
    : NOMBRE '(' (valor (';' valor)*)? ')'
    ;

NUMERO      : [0-9]+ ;
TEXTO       : '"' (~["\r\n])* '"' ;
NOMBRE      : [a-zA-Z_][a-zA-Z0-9_]* ;
WS          : [ \t\r\n]+ -> skip ;
COMENTARIO  : '//' ~[\r\n]* -> skip ;