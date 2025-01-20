//declaración funcion de tipo  expresion
let sumar = function(a, b){ return  a + b  };
let resultado = sumar(5,5);
console.log(resultado);
resultado = sumar(20,20);
console.log(resultado);
sumar(4,4);

//funcion anonima self-invoking que se llama asi mismo
(function(a, b){
    console.log('Ejecutando la funcion anonima: ' + (a + b))
})(2, 5);

function miFuncion(a, b){
    //numero de argumentos dentro de una funcion
    console.log("Argumentos: " + arguments.length)
    console.log("Argumentos 0 : " + arguments[0])
    return a + b 
}
resultado = miFuncion(4, 7, 5)
console.log("Resultado : "+resultado);
