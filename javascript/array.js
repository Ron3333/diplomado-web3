
let autos = ['BMW','Mercedes Benz','Volvo'];
console.log(typeof(autos));
console.log(autos);
console.log(autos[1]);

console.log(autos.length) ;

for (let i = 0; i < autos.length; i++){
    console.log(i + ':' + autos[i]);
}

//modificar el valor de los arreglos
autos[1] = 'FIAT'
console.log(autos[1])
console.log(autos);

//agregar elemtos
autos.push('Audi');
console.log(autos);

let b = autos.pop();
console.log(autos);
console.log(b);

let z = autos.shift()
console.log(z);
console.log(autos);