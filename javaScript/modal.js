

/* ------------------------------------------- MODAL ---------------------------------------------------- */

const modalContenedor = document.getElementsByClassName('modal-contenedor')[0]

const btnAbrir = document.getElementById('boton-carrito')

const btnCerrar = document.getElementById('carritoCerrar')

const carritoModal = document.getElementsByClassName('modal-carrito')[0]


btnAbrir.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active')
})
btnCerrar.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active')
})

modalContenedor.addEventListener('click', (event) =>{
    modalContenedor.classList.toggle('modal-active')

})
carritoModal.addEventListener('click', (event) => {
    event.stopPropagation() 
})

/* ----------------------------------- Evento boton finalizar compra ------------------------------------ */

botonFinalizar.addEventListener("click", () => {

    swal.fire({
        icon: "success",
        confirmButtonColor: "rgb(123, 12, 12)",
        background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(22,22,22,1) 0%, rgba(0,0,0,0.8104283949908089) 0%, rgba(56,56,56,1) 100%)',
        title: "Gracias por la compra en nuestra tienda!!",
    });
    });