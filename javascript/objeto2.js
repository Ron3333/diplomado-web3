
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombreCompleto());
let nombreApellido = persona.nombreCompleto();
console.log(nombreApellido);

console.log( persona.apellido );
console.log( persona['apellido'] );
console.log( "----------------------");

for( namePropiedad in persona){
    console.log( namePropiedad +" -> ");
    console.log( persona[namePropiedad]);
}