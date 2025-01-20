let  x = 10;

function cambiarValor(a){
	// a esta solo e el ambito de la funcion
	a = 20;	
}

// Paso por valor
cambiarValor(x);
console.log(x);