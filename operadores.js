//En JS no existe diferencia entre numero y string

/**
 * Operadores Aritmeticos
 * 1. Adición:              +
 * 2. Substracción:         -
 * 3. Multiplicación:       *
 * 4. Potenciación          **
 * 5. División              /
 * 6. Modulo                %
 * 7. Incremento            ++
 * 8. Decremento            --
 */
console.log("Operaciones Aritmeticas")
let a = b = c = d = e = f = g = h = 5
console.log("Variable: 5")
a = a + 4
console.log("Op-1: 5+4 => " + a)
b = b - 4
console.log("Op-2: 5-4 => " + b)
c = c * 5
console.log("Op-3: 5*5 => " + c)
d = d ** 3
console.log("Op-4: 5**3 => " + d)
e = e / 5
console.log("Op-5: 5/5 => " + e)
f = f % 2
console.log("Op-6: 5%2 => " + f)
g++
console.log("Op-7: 5++ => " + g)
h--
console.log("Op-8: 5-- => " + h)


/**
 * Operadores de Asignación
 * 1. Asignaciòn simple
 * 2. Asignacion adicion
 * 3. Asignacion subtracciòn
 * 4. Asignaciòn multiplicaciòn
 * 5. Asignaciòn divisiòn
 * 6. Asignaciòn modulo
 * 7. Asignaciòn potencia
 */
console.log("\nOperaciones de asignación")
a = b = c = d = e = f = g = 5
console.log("Variable: 5")
a = 5
console.log("Op-1: 5=5 => " + a)
b += 4
console.log("Op-2: 5+=4 =>" + b)
c -= 4
console.log("Op-3: 5-=4 => " + c)
d *= 3
console.log("Op-4: 5*=3 => " + d)
e /= 5
console.log("Op-5: 5/=5 => " + e)
f %= 2
console.log("Op-6: 5%=2 => " + f)
g **= 2
console.log("Op-7: 5**=2 => " + g)

/**
 * Operadores de comparaciòn
 * 1. igualdad devil
 * 2. igualdad fuerte
 * 3. desigualdad devil
 * 4. desigualdad fuerte
 * 5. mayor que
 * 6. menor que
 * 7. mayor o igual que
 * 8. menor o ogual que
 * 9. operador ternario
 */
console.log("\nOperaciones de comparación")
let i = 10, j = 11, k = 33, m = 10
a = (null==undefined)
console.log("Op-1: null==undefined => " + a)
b = (null === undefined)
console.log("Op-2: null===undefined =>" + b)
c = (null != undefined)
console.log("Op-3: null!=undefined => " + c)
d = (null !== undefined)
console.log("Op-4: null!==undefined => " + d)
e = (f>g)
console.log("Op-5: 1>25 => " + e)
f = (h<g)
console.log("Op-6: 4<25 => " + f)
g = (i>=j)
console.log("Op-7: 10>=11 => " + g)
h = (k<=m)
console.log("Op-8: 33<=1 => " + h)
m = (null == undefined) ? 1 : 0
console.log("OP-9: null==undefined, true=1, else=0 => " + m)

/**
 * Operadores Lógicos
 * 1. AND
 * 2. OR
 * 3. NOT
 */
console.log("\nOperadores Lógicos")
a = true && true
console.log("Op-1: true && true => " + a)
a = true && false
console.log("Op-2: true && false => " + a)
a = false && true
console.log("Op-3: false && true => " + a)
a = false && false
console.log("Op-4: false && false => " + a)
a = true || true
console.log("Op-5: true || true => " + a)
a = true || false
console.log("Op-6: true || false => " + a)
a = false || true
console.log("Op-7: false || true => " + a)
a = false || false
console.log("Op-8: false || false => " + a)
a = !true
console.log("Op-9: !true => " + a)
a = !false
console.log("Op-10: !false => " + a)


/**
 * Operadores de bits
 */