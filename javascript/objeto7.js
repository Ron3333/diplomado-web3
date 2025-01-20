//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
    this.correo = function(){
        return this.email;
    }
}

// el operador new crea un espacio de memoria para un nuevo objeto
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre.nombreCompleto() );

let hijo = new Persona('Pepe', 'Quintero', 'Pepequintero@mail.com');
console.log( hijo.correo() );

padre.nombre = 'Carlos';

Persona.prototype.cabello = '';
padre.cabello= "Rojo";

console.log( padre.cabello );
console.log( madre.cabello );
console.log( hijo.cabello );

for( namePropiedad in padre){
    console.log( namePropiedad +" -> ");
    console.log( padre[namePropiedad]);
}
