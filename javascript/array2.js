
let numbers = [10, 2, 4, 5, 12, 6];
let maxNumber = numbers[0]; // Asumimos que el primer elemento es el mayor
let i = 1; // Empezamos a recorrer desde el segundo elemento

while (i < numbers.length) {

  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
  i++;
}

console.log("El número mayor es:", maxNumber);

//Sumar los elementos de un array

const numeros = [20, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma es: "+ suma);