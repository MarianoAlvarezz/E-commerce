

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