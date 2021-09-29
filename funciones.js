/**
 * Función declarada:
 * 
 *      Partes de una función:
 * 
 *      function nombre_funcion (param_1, param_2, param_3){
 *          let variable_local
 *          return valor_retorno
 *      }
 * 
 */
console.log("Función declarada:")
let a = 5,
    b = 6,
    c

function sumar (a,b){
    return a + b
}

c = sumar(a,b)

console.log("\tSumar como variable: => " + c)
console.log("\tSumar como funcion: => " + sumar(a,b))
console.log("\tSumar como funcion sin parametros: => " + sumar)
console.log("\tSumar como texto intermedio: => La suma es " + sumar(a,b) + " unidades")

/**
 * Propiedad de función:
 *      arguments
 *          atributo que retonar un arreglo con los argumentos
 *          de la función utilizada
 *      ...
 *          atributo que retonar el resto de parametros
 */
console.log("\nPropiedad: arguments de función declarada")
let a1 = "\targumento 1",
    a2 = "\targumento 2",
    a3 = "\targumento 3"

function argumentos(a1,a2,a3){
    for (let i = 0; i < arguments.length; i++) {
        console.log("\t" +arguments[i] + " de la función")
    }
}
console.log("\tPropiedad: arguments =>")
argumentos(a1,a2,a3)

console.log("\tPropiedad que retorna el resto de parametros en forma de un objeto")
function multiplicar(multiplicador,...parametros){
    return parametros.map(x => console.log("\t\t\t" + multiplicador + " * " + x + " = " + multiplicador*x))
}

console.log("\t\tNuméros multiplicados *2:")
let arr = multiplicar(2,1,2,3);


/**
 * Función anonima o función como expresión
 *      Partes de una función:
 *      
 *      const/let/var nombre_variable = function (param_1, param2, param3){
 *          let variable_local
 *          return valor_retorno
 *      }
 */
console.log("\nFunción anonima")
let resta = function(a,b){
    return b-a
}
console.log("\tLa resta de la función anonima es: " + resta(5,9))

/**
 * Funciones anidadas
 *      Alcance de la función:
 *          las funciones externas pueden obtener datos de las variables externa
 */
console.log("\nFunciones anidadas")
console.log("\tFunciones sin parametros")
let w = 1
let externa = function (){
    x = w
    let y = 1
    console.log("\t\tfuncin externa sumar: " + (x+y))
    let cubo = function (){
        let z = x + y
        console.log("\t\t\tfuncion interna cubo: " + z*z*z)
    }
    return cubo()
}
externa()

console.log("\tFunciones con parametros")

function ext(x){
    console.log("\t\t\tllamada a función externa")
    function inter (y){
        console.log("\t\t\t\tllamada a función interna")
        return x+y
    }
    return inter
}
console.log("\t\t\t1° forma de llamada: llamada constructiva o por partes")
fn_interna = ext(3)
resultado1 = fn_interna(5)

console.log("\t\t\t2° forma de llamada: llamada conjunta o anidada")
resultado2 = ext(3)(5)

/**
 * Función flecha
 */