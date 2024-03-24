//Operador Exponencial

//let resultado = 2 ** 3
// let base = 5
// let exponente = 2
// let resultado = base ** exponente

//Operador Includes
// const numeros = [2 ,3 ,54 ,6, 3, 1]
// const bebidas = ["cafe", "mate", "agua"]

// console.log(bebidas.includes("agua"))
// console.log(numeros.includes(54))
// console.log(numeros.includes("54"))

//Operador Nullish
//Revisa si el primer operador tiene un valor distinto de "null", si es así, 
//usa ese valor, de lo contrario usa el valor indicado despues del operador ??

// const nombre = null
// const nombrePorDefecto = "CoderHouse"

// const nombreCompleto = nombre ?? nombrePorDefecto
// console.log(nombreCompleto)

//Object.entries, Object.values, Object.keys
//Utilizados para recorrer objetos

//Objeto persona
// const persona = {
//     nombre: "Coder",
//     edad: 30,
//     ciudad: "Córdoba"
// }

// const entradas = Object.entries(persona)
// const valores = Object.values(persona)
// const claves = Object.keys(persona)

// //Pares del objeto
// console.log(entradas)
// //Valores del objeto
// console.log(valores)
// //Claves del objeto
// console.log(claves)

//Finally - Promesas

// function ejemploPromesa(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             //Controla el estado resolutorio de la promesa
//             const exito = false

//             //Esta forma de if indica que "exito" es True
//             if(exito){
//                 resolve("Éxito")
//             } else {
//                 reject("Error")
//             }

//         },5000)
//     })
// }

// ejemploPromesa()
// .then((resultado) => {
//     console.log(resultado)
// })
// .catch((error)  => {
//     console.log(error)
// })
// .finally(()=> {
//     console.log("La promesa ha sido finalizada")
// })

//Spread Operator "..."

// const numeros = [1,2,3,4]

// const nuevosNumeros = [...numeros, 5,6]

// console.log(nuevosNumeros)

//  arr.push(...items) – agrega ítems al final,
//  arr.pop() – extrae un ítem del final,
//  arr.shift() – extrae un ítem del inicio,
//  arr.unshift(...items) – agrega ítems al principio

//Actividad
//  const objetos = [{manzanas: 3, peras:2, carne:1, jugos: 5, dulces:2}, {manzanas:1, sandias: 1, huevos: 6, jugos:1, panes:4}]

 // Por cada objeto del array, se compara en el if, si no esta se agrega a la lista.
//  const tiposDeProducto = objetos.reduce((lista, objeto) => {
//     Object.keys(objeto).forEach(producto=>{

//         if(!lista.includes(producto)) {
//             lista.push(producto)
//         }
//     })

//     return lista

//  }, [])

//  console.log(tiposDeProducto)

 
// Este código en JavaScript utiliza el método reduce() para obtener una lista de todos los tipos de productos presentes en el array objetos. Permíteme desglosarlo paso a paso:
// reduce() es un método de los arrays en JavaScript que se utiliza para reducir el array a un solo valor. En este caso, se usará para acumular una lista de tipos de productos únicos.
// El método reduce() toma una función de reducción como su primer argumento. Esta función de reducción recibe dos parámetros: el acumulador (en este caso lista) y el elemento actual del array (en este caso objeto).
// La función de reducción comienza con un array vacío como valor inicial del acumulador ([]). Este array vacío se utilizará para acumular los tipos de productos únicos.
// Dentro de la función de reducción, se utiliza Object.keys(objeto) para obtener un array de todas las claves (nombres de productos) del objeto actual.
// Luego, se utiliza forEach() para iterar sobre cada clave del objeto.
// Dentro del bucle forEach(), se comprueba si el tipo de producto actual no está presente en la lista acumulada (lista) utilizando !lista.includes(producto). Si no está presente, se añade a la lista utilizando lista.push(producto).
// Finalmente, la función de reducción devuelve el acumulador (lista) actualizado después de procesar todos los objetos del array objetos.
// El resultado final es una lista que contiene todos los tipos de productos únicos presentes en los objetos del array objetos.
// En resumen, este código utiliza reduce() para obtener una lista de todos los tipos de productos únicos presentes en el array de objetos.

//  const totalProductosVendidos = objetos.reduce((total, objeto) => {

//     const cantidades = Object.values(objeto)
//     const suma = cantidades.reduce((a, b) => a + b , 0)

//     return total + suma
//  }, 0)

//  console.log(`Total de productos vendidos: ${totalProductosVendidos} productos.`)
 
// Este código en JavaScript utiliza el método reduce() nuevamente, pero esta vez para calcular el total de productos vendidos en todos los objetos del array objetos. Veamos paso a paso cómo funciona:
// Se inicia con un acumulador inicializado en 0 (0), que representará el total de productos vendidos.
// La función de reducción recibe dos parámetros: el acumulador (total) y el elemento actual del array (objeto).
// Dentro de la función de reducción, se utiliza Object.values(objeto) para obtener un array que contiene los valores de todas las propiedades del objeto actual (objeto), es decir, las cantidades de cada tipo de producto.
// Luego, se utiliza otro reduce() en cantidades para sumar todos los valores del array y obtener la cantidad total de productos vendidos en el objeto actual.
// El resultado de esta suma se almacena en la variable suma.
// La función de reducción principal devuelve el acumulador (total) actualizado sumando el valor de suma al acumulador actual.
// Finalmente, el resultado final de la reducción es el total de productos vendidos en todos los objetos del array objetos.
// En resumen, este código utiliza reduce() para iterar sobre todos los objetos del array objetos, calcular la suma de las cantidades de productos vendidos en cada objeto y obtener el total general de productos vendidos en todos los objetos del array.

//Registrador de tickets de eventos

class TicketManager {
    constructor() {
      this.eventos = [];
      this.precioBaseDeGanancia = 0;
    }
  
    getEventos() {
      return this.eventos;
    }

    agregarEvento(nombre, lugar, precio,capacidad = 50, fecha = new Date()) {
        const precioConGanancia = precio * 1.15;
        const eventoID = this.eventos.length + 1;
        const participantes = [];
        const evento = {
            id: eventoID,
            nombre,
            lugar,
            precio: precioConGanancia,
            capacidad,
            fecha,
            participantes
        };
        this.eventos.push(evento);
    }
    
    agregarUsuario(eventoID,usuarioID){
        const evento = this.eventos.find(evento => evento.id === eventoID);
        if (!evento) {
          console.log("El evento no existe.");
          return;
        }

        if(evento.participantes.includes(usuarioID)) {
            console.log("Usuario ya se encuentra registrado");
            return;
        }

        //OTRA FORMA
        /*
        const usuarioRegistrado = participantes.include(usuarioID)
        if (usuarioRegistrado) {
            console.log(`Usuario ${usuarioID} registrado al evento ${eventoID}`)
            return
        }
        */

        evento.participantes.push(usuarioID);
        console.log(`Usuario ${usuarioID} registrado al evento ${eventoID}`)
    }

    ponerEventoEnGira (eventoID, nuevaLocalidad, nuevaFecha){
        const eventoEncontrado = this.eventos.find(evento => eventoID)
        if(!eventoEncontrado) {
            console.log("El evento no existe.");
            return;
        }

        const nuevoEvento = { ...eventoEncontrado, lugar:nuevaLocalidad, fecha:nuevaFecha, id:this.eventos.length + 1,
             participantes: []};
        this.eventos.push(nuevoEvento);
        console.log(`Evento ${eventoID} incluido en la gira`)

    }
}

const manager = new TicketManager();


manager.agregarEvento("Concierto", "Estadio", 100);
manager.agregarEvento("Feria", "Centro de convenciones", 50);
console.log(manager.getEventos());
manager.agregarUsuario(1, 1);
manager.agregarUsuario(1, 2);
manager.agregarUsuario(2, 1);
console.log(manager.getEventos());
manager.ponerEventoEnGira(1, "Otro lugar", new Date("2024-04-01"));
console.log(manager.getEventos());




