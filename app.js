class Persona {
    constructor(nombre, peso, apellido, edad, vivo) {
        this.nombre = nombre;
        this.peso = peso;
        this.apellido = apellido;
        this.edad = edad;
        this.vivo = vivo;
    }
    saludar(nombre) {
        if (this.vivo) {
            console.log("Hola " + nombre + " soy " + this.nombre);
        } else {
            console.log("CORRE!!!");
        }
    }
}

let persona1 = new Persona("Tomi", 70, "Rojo", 25, false);
let persona2 = new Persona("Mica", 45, "dasdsa", 22, true);

console.log(true);
