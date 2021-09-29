/**
 * Objetos:
 *      - colección de atributos. Los atributos pueden ser valores
 *      como cadenas o números, pero tambien pueden ser funciones. 
 *      Propiedades:
 *          Atributos que se le asignarán al objeto
 *      Métodos:
 *          Acciones que se le asignarán al objeto
*/
//Creación de Objetos
//1° Forma:
const obj1 = new Object();

//2° Forma:
const obj2 = {}

// Asignar valores a los objetos
//1° Forma
obj1.nombre = "objeto 1"
obj1.numero = 1
obj1.accion = function (){return "Soy el objeto 1"}

//2° Forma
const obj3 = {
    nombre: "objeto 3",
    numero: 3,
    accion: function () {
        return "Soy el objeto 3"
    }
}


//Acceso a las propiedades de los objetos
//1° Forma
console.log("Objeto 1:")
console.log("\t nombre: " + obj1.nombre)
console.log("\t numero: " + obj1.numero)
console.log("\t acción: " + obj1.accion())

//2° Forma
console.log("Objeto 3:")
console.log("\t nombre: " + obj3["nombre"])
console.log("\t numero: " + obj3["numero"])
console.log("\t acción: " + obj3.accion())

/**
 * Métodos de los objetos
 */

