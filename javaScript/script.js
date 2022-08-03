/* ------------------------------------------------ Entrega ---------------------------------------------------- */


/* ---------- Objeto ---------- */
/* class Guitarra {
    constructor (marca, precio, adicionales, cuotas){
        this.marca;
        this.precio;
        this.adicionales;
        this.cuotas;
        this.id = 1
    } 

    mostrar_descripcion(){
    return this.marca + "El total tiene un costo de: $" + this.precio;
    } */


/**
 * Setea un nuevo id
 * @param {*} nuevo_id a setear

/* set_id(nuevo_id){

        this.id = nuevo_id;
    }
} */

/* ---------- Array ---------- */

/* let guitarrasStock = [];

let guitarras1 = new Guitarra ("Fender", "cuerdas", 120000, 18);
guitarras1.set_id(1);
let guitarras2 = new Guitarra ("Gibson", "soporte", 150000, 24);
guitarras2.set_id(2);
let guitarras3 = new Guitarra ("Jackson", "afinador", 110000, 12);
guitarras3.set_id(3);
let guitarras4 = new Guitarra ("Yamaha", "puas", 100000, 6); 
guitarras4.set_id(4);

guitarrasStock.push(guitarras1);
guitarrasStock.push(guitarras2);
guitarrasStock.push(guitarras3);
guitarrasStock.push(guitarras4);



const hoy = new Date();

alert ("¡Bienvenidos a nuestro local de compras! " + hoy.toLocaleString());

let opciones = true;
while (opciones) {
    let mensaje = "Indique lo que usted quiere hacer:";
    mensaje +=    "\n1) Elija que guitarra usted quiere comprar, forma de pago y si desea comprar un adicional";
    mensaje +=    "\n2) Salir";


let respuesta = prompt (mensaje);

    switch(respuesta){
        case "1":
            elegir_guitarra();
            break;

        case "2":
            alert ("Gracias por utilizar nuestra pagina");
            opciones=false;
            break;
        }
    } */


/* ---------- Ingreso de datos del usuario ---------- */

/*     function ingresar_datos(){

        let check = true;

        while (check){
            let msj = "";
            let marca = prompt ("Ingrese la marca que desea comprar" + "\n 1) Guitarra Fender" + "\n 2) Guitarra Yamaha" + "\n 3) Guitarra Jackson" + "\n 4) Guitarra Gibson");
            let precio = prompt (("Desea pagarlo en cuotas o al contado (Indicar cuotas o contado)"));

            let adicional = prompt (("Que adicional desea agregar:" + "\n 1) Cuerdas" + "\n 2) Soporte" + "\n 3) Afinador" + "\n 4) Puas"));

            if (!marca){
                msj+= ("\n Debe ingresar un valor valido");
            }
            if (isNaN(!precio)){
                msj+= ("\n Debe ingresar un valor númerico");
            }
            if (msj != ""){
                alert(msj);
                check = confirm ("Desea cargar nuevamente los datos");
            }

            else {
                return new Guitarra (marca, precio);
            }
    }
    return false;
} */

/* ---------- Funciones ---------- */

/*     function elegir_guitarra(){
    
    let guitarra = ingresar_datos();

    if (guitarra){
        guitarra.set_id(gen_id);
        gen_id++

        guitarrasStock.push(guitarra);
        alert ("Guitarra agregada con exito")
    }
} */



/* ------------------------------------------------ Nuevo cod ---------------------------------------------------- */

/* Clase constructora  */

class Guitarra {
    constructor (marca, adicional, precio){
        this.marca = marca;
        this.precio = precio;
        this.adicional = adicional;
    }

    mostrar_descripcion(){

    return this.marca + this.adicional + " $" + this.precio; 
    }
}

/* Creo el array */

let guitarrasStock = [];
guitarrasStock.push(new Guitarra ("Fender", " cuerdas -", 120000));
guitarrasStock.push(new Guitarra ("Gibson", " soporte -", 150000));
guitarrasStock.push(new Guitarra ("Jackson", " afinador -", 110000));
guitarrasStock.push(new Guitarra ("Yamaha", " puas -", 100000));

/* Opciones del usuario */

let respuesta = prompt ("Que accion desea realizar? \n 1) Ver las guitarras \n 2) Actualizar rango de precio \n 3) Ordenar las guitarras por precio")

if (respuesta == "1"){
    alert ("Las guitarras y adicionales son:" + mostrar_stock())

} else if (respuesta == "2"){

let guitarra = prompt ("Guitarra a la que desea actualizar el precio");
let indice = buscarGuitarra(guitarra);

if (indice >= 0){

        let nuevo_valor = prompt ("Ingrese un nuevo valor");

        guitarrasStock[indice].precio = nuevo_valor;

        alert ("Ahora la lista es: \n" +mostrar_stock())

}else {
        alert ("No ingresaste una guitarra valida");    
    }
}

/* Funcion para buscar la guitarra */

function buscarGuitarra(marca){

    let i = 0;
    while(i < guitarrasStock.length){

        if (guitarrasStock[i].marca == marca){
            return i;
        }
        i++

    }
    return -1;
}

/* Funcion para mostrar stock */

function mostrar_stock(){

    let stock = "";
    for (let i=0; i < guitarrasStock.length; i++){

        stock+= "\n" + guitarrasStock[i].mostrar_descripcion();
    }
    return stock;
}