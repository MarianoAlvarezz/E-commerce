/* --------------------------------------------------- Productos agregados con fetch ------------------------------------------------ */


const link = "../javaScript/db.json";

class GestionarProductos {
    iniciar() {
        console.log("Gestio class");

        fetch(link)

            .then((res) => res.json())

            .then((data) => {
                console.log(data);
                data.forEach((producto) => {
                    const div = document.createElement("div");
                    div.classList.add("producto");
                    div.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p class="precioProducto">Precio:$ ${producto.precio}</p>
                    <img src="../imagenes/${producto.img}" alt= "Imagenes guitarras">
                    <p class="descProd">${producto.desc}</p>
                    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                    <hr>
                    <br>
                    `;
                    
                    contenedorProductos.appendChild(div);
                    const boton = document.getElementById(`agregar${producto.id}`);
                    
                    boton.addEventListener("click", () => {
                        agregarAlCarrito(producto.id);
                    });
                });
            })
            .catch((err) => console.error(err));
    }
}

const gestionar = new GestionarProductos();
gestionar.iniciar();

/* --------------------------------------------------- Agregar al Carrito ------------------------------------------------ */

const agregarAlCarrito = (prodId) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 3000,
        background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(22,22,22,1) 0%, rgba(0,0,0,0.8104283949908089) 0%, rgba(56,56,56,1) 100%)',
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Usted agrego este producto al carrito'
    })


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

}

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
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length 

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

/* ------------------------------------- FINALIZAR COMPRA --------------------------------------------- */

finalizarCompra = () => {
    let botonFinalizar = document.getElementById("botonFinalizar");
    let detalleCarrito = document.getElementsByClassName('modal-contenedor');
    let countCarrito = document.getElementsByClassName('modal-carrito');

    botonFinalizar.addEventListener("click", () => {
    localStorage.clear();
    detalleCarrito.innerHTML = "";
    countCarrito.innerHTML = 0;

    swal.fire({
        icon: "success",
        confirmButtonColor: "#719f41",
        title: "Gracias por comprar en nuestra tienda!!",
        text: "Nos pondremos en contacto",
    });
    });
}