/*
let a = 20;
let b = 10;

if(a > 30){
    console.log("Es verdadero");
}else{
	console.log("Es Falso");
}

if( a > 30 || a == 20){
    console.log("Es verdadero");
}else{
	console.log("Es Falso");
}

//Ejercicio

let edad = 17;
let lic = true;

if(edad >= 18 && lic){
	console.log("Puede alquilar un carro");
}else{
	console.log("NO puede alquilar un carro");
}

if(edad >= 18){

	if(lic){
		console.log("Puede alquilar un carro");
	}else{
		console.log("No tiene Lic");
	}

}else{
	console.log("NO es mayor de edad");
}
*/
let precio = 2000;
let socio = true;
let descuento = 0;

if(precio > 1000){

	if (socio) {
		descuento = precio * 0.3;
		console.log("Tiene descuento del 30% : "+ descuento);
	}else{
		descuento = precio * 0.15;
		console.log("Tiene descuento del 15% : "+ descuento);
	}

}else{
	console.log("No tiene descuento");
}


