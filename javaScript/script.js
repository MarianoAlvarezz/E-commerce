/* ------------------------------------------------------- Stock ----------------------------------------------------- */

/* const stockProductos = [
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


/* --------------------------------------------------- FETCH ------------------------------------------------ */


const link = '../javaScript/db.json'

class GestionarProductos{

    iniciar() {
        console.log("Gestio class")

        fetch( link )
        .then( res => res.json())
        .then( data => {console.log(data)})
        .catch (err => console.error(err));
    }
}

const gestionar = new GestionarProductos()
gestionar.iniciar()

/* --------------------------------------------------- Eliminar del Carrito ------------------------------------------------ */

const eliminarDelCarrito = (prodId) => {

    Swal.fire({
        title: 'Usted ha eliminando este producto',
        background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(22,22,22,1) 0%, rgba(0,0,0,0.8104283949908089) 0%, rgba(56,56,56,1) 100%)',
        color: 'white',
        confirmButtonColor: '#4d0a11',
    })
    
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

/*     console.log(carrito) */
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)


}

/* ------------------------------------- ACTUALIZAR CARRITO --------------------------------------------- */

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

/* ------------------------------------- PRODUCTOS DOM --------------------------------------------- */

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