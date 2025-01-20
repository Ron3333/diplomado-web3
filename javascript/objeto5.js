let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    }
};

//console.log( persona.nombreCompleto);
console.log( persona.lang);
//persona.lang("Us");
persona.lang = "Us";
console.log( persona.lang);
persona.idioma = "XXX"
console.log(persona.idioma);