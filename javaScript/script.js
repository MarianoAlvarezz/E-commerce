/* ------------------------------------------------------- Stock ----------------------------------------------------- */

let stockProductos = [
    {id: 1, nombre: "Guitarra 1", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: "1200",},
    {id: 2, nombre: "Guitarra 2", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: "1500",},
    {id: 3, nombre: "Guitarra 3", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: "1900",},
    {id: 4, nombre: "Guitarra 4", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: "1800",}
]

/* ------------------------------------------------------- Productos ----------------------------------------------------- */


const contenedorProductos = document.getElementById('contenedor-productos')



const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

/* ------------------------------------------- MODAL ---------------------------------------------------- */

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})