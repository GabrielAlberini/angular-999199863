function sumar(n1, n2) {
  return n1 + n2
}

const resultado = sumar(1, 2)
console.log(resultado)

// ----------------------------------

// ECMAscript 6 -> 2015
// arrow function
const sumar2 = (n1, n2) => n1 + n2

const resultado2 = sumar2(2, 6)
console.log(resultado2)

// var -> scope global -> se puede acceder de cualquier lado
// let -> scope función
// const -> scope función -> es inmutable


// js es de tipado debil -> puedo reasignar en tiempo de ejecución
let edad = 10
edad = "fideos"

console.log(edad)

const PI = 3.1416
// PI = "milanesas"

// Template strings
// es la posibilidad de interpolar string + js

const name = "Gabriel"
const years = 31

// interpolar
const message = `Hola, soy ${name} y tengo ${years} años.` // ASCII -> alt + 96
console.log(message)

// ES6 -> Parámetro Rest
const listarFrutasFavoritas = (...frutas) => {
  console.log(frutas)
  // ----
  frutas.forEach((fruta, index) => {
    console.log(`Mi ${index + 1}° fruta fav es la ${fruta}`)
  })
}

// argumento
listarFrutasFavoritas("pera", "manzana", "banana", "anana", "ciruela")

// undefined === null?
// undefined -> indefinido -> esperando un valor...

// destructuración

const persona = {
  nombre: "Ana",
  tieneMascota: false,
  ciudad: "Santa Fe"
}

const { nombre, tieneMascota, ciudad } = persona

console.log(nombre)
console.log(tieneMascota)
console.log(ciudad)

// Clases
// POO

// clases en js "maquinas" que definen la estructura de cada nuevo objeto

const perro1 = {
  nombre: "arandela",
  edad: 6,
  color: ["marrón"],
  esDivertida: true
}

const perro2 = {
  nombre: "lolo",
  edad: 1,
  color: ["marrón", "blanco"],
  esDivertida: false
}

// definir una clase Perro
// sugar sintext -> camuflando el hecho de tener clases en js -> js es un lenguaje orientado a prototipos
class Perro {
  constructor(nombre, edad, colores, esDivertida) {
    this.nombre = nombre
    this.edad = edad
    this.colores = colores // array de strings
    this.esDivertida = esDivertida
  }

  saludar() {
    console.log(
      `Hola, soy ${this.nombre}, tengo ${this.edad} años, mis colores son ${this.colores.join(", ")} y ${this.esDivertida ? "soy divertida 😄" : "no soy muy divertida 😅"}`
    )
  }
}

const arandela = new Perro("Arandela", 6, ["marron", "blanco"], true)
const pepe = new Perro("Pepe", 1, ["blanco"], false)

const palabra = new String("Gabriel")
console.log(palabra)