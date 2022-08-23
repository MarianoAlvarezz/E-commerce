/* ------------------------------------------------------- Stock ----------------------------------------------------- */

let stockProductos = [
    {id: 1, nombre: "Guitarra 1", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 1200",},
    {id: 2, nombre: "Guitarra 2", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 1500",},
    {id: 3, nombre: "Guitarra 3", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 1900",},
    {id: 4, nombre: "Guitarra 4", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 1800",},
    {id: 5, nombre: "Guitarra 5", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 2500",},
    {id: 6, nombre: "Guitarra 6", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 2300",},
    {id: 7, nombre: "Guitarra 7", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 3550",},
    {id: 8, nombre: "Guitarra 8", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 3100",},
    {id: 9, nombre: "Guitarra 9", tipo: "Guitarra", cantidad: 1, desc: "Nada es mas hermoso que una guitarra, excepto 2", precio: " 2750",}
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


stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= ""></img>
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <img class= "imagenCarrito" src= "../Imagenes/imagenCarrito.jpg" alt= ""></img>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `


    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)

    })
})

const agregarAlCarrito = (prodId) => {


    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){
        const prod = carrito.map (prod => {

            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)

        carrito.push(item)
    }

    actualizarCarrito()

    
    existe > 0 ? alert ("Usted agregó nuevamente la misma guitarra") : alert ("Usted agrego una nueva guitarra")

}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1)

    actualizarCarrito()

    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""



    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <img class= "imagenCarritoModal" src= "../Imagenes/imagenCarrito.jpg" alt= ""></img>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length 

    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)


}

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