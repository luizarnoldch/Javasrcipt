/**
 * var:
 *  Caracterisitcas:
 *      Declarable vacia
 *      Mutable
 *      Redeclarable
 *      Limitado al espacio 
 */
var a
console.log(a)  //undefined
a = 5
console.log(a)  //5
var a = "a"
console.log(a)  //a


/**
 * Let:
 *  Caracteristicas:
 *      Declarable vacia
 *      Mutable
 *      No-Redeclarable
 *      Limitado al espacio
 */
let b
console.log(b)  //undefined
b = 5
console.log(b)  //5
let b = "b"
console.log(b)  //error


/**
 * const:
 *  Caracteristicas:
 *      No-Declarable vacia
 *      No-mutable
 *      No-redeclarable
 *      No-limitado al espacio
 */
const c
console.log(c)  //error
c = 5
console.log(c)  //error
const c = "c"
console.log(c)  //error