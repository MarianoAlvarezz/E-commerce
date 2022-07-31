
/* const seisCuotas = 6;
const doceCuotas = 12;
const dieciochoCuotas = 18;
const veinticuatroCuotas = 24;

let valorGuitarra = 123000;

class Guitarra {
    constructor (precio, marca){
        this.precio = precio;
        this.marca = marca;
    }

    setPrecio (precio){
        this.precio = precio;
    }

    precio(){
    return this.precio 
        
    }
    marca(){
        return this.marca
    }
}

let guitarraFender = new Guitarra (600 , "Fender")
let guitarraGibson = new Guitarra (850 , "Gibson")
let guitarraYamaha = new Guitarra (550 , "Yamaha")
let guitarraJackson = new Guitarra (650 , "Jackson")

let guitarrasStock = new Array ();

guitarrasStock.push(guitarraFender);
guitarrasStock.push(guitarraGibson);
guitarrasStock.push(guitarraYamaha);
guitarrasStock.push(guitarraJackson);

guitarrasStock.forEach(guitarra => guitarra.setPrecio(guitarra.precio() + 100), console.log(guitarra.precio()));


function costoSeisCuotas(valorGuitarra, seisCuotas){
    return valorGuitarra / seisCuotas;
}

function costoDoceCuotas(valorGuitarra, doceCuotas){
    return valorGuitarra / doceCuotas;
}

function costoDieciochoCuotas(valorGuitarra, dieciochoCuotas){
    return valorGuitarra / dieciochoCuotas;
}

function costoVeinticuatroCuotas(valorGuitarra, veinticuatroCuotas){
    return valorGuitarra / veinticuatroCuotas;
}

let Cuotas = parseInt(prompt("Coloque la cantidad de cuotas deseadas (6, 12, 18 o 24)"));

let resultadoSeis = costoSeisCuotas (valorGuitarra, seisCuotas);
let resultadoDoce = costoDoceCuotas (valorGuitarra, doceCuotas);
let resultadoDieciocho = costoDieciochoCuotas (valorGuitarra, dieciochoCuotas);
let resultadoVeinticuatro = costoVeinticuatroCuotas (valorGuitarra, veinticuatroCuotas);

while(Cuotas!=6 && Cuotas!=12 && Cuotas!=18 && Cuotas!= 24){
    Cuotas = prompt ("Ingresaste un valor incorrecto, por favor ingrese un valor valido (6, 12, 18 o 24");
}

if(Cuotas == seisCuotas){
    let cuotasCantidad = confirm ("¿Usted desea elegir pagar este producto en 6 cuotas?");

    alert("Usted ha elegido pagar este producto en 6 cuotas, cada cuota a pagar va a tener un valor de $" + resultadoSeis);
}

if(Cuotas == doceCuotas){
    let cuotasCantidad = confirm ("¿Usted desea elegir pagar este producto en 12 cuotas?");

    alert("Usted ha elegido pagar este producto en 12 cuotas, cada cuota a pagar va a tener un valor de $" + resultadoDoce);
}

if(Cuotas == dieciochoCuotas){
    let cuotasCantidad = confirm ("¿Usted desea elegir pagar este producto en 18 cuotas?");

    alert("Usted ha elegido pagar este producto en 18 cuotas, cada cuota a pagar va a tener un valor de $" + resultadoDieciocho);
}

if(Cuotas == veinticuatroCuotas){
    let cuotasCantidad = confirm ("¿Usted desea elegir pagar este producto en 24 cuotas?");

    alert("Usted ha elegido pagar este producto en 24 cuotas, cada cuota a pagar va a tener un valor de $" + resultadoVeinticuatro);
}
    alert ("Muchas gracias por su compra!"); */



    /* -------------------------------------------------------- Práctica -------------------------------------------------------------- */

    /* ----------Clase---------- */

        /* ------------ Sacar comentario para activar el script ------------------ */

class Guitarra {
    constructor (marca, precio, adicionales, cuotas){
        this.marca;
        this.precio;
        this.adicionales;
        this.cuotas;
        this.id = -1
    } 

    mostrar_descripcion(){

        return this.marca + "El total tiene un costo de: $" + this.precio;


        
    }


    /**
     * Setea un nuevo id
     * @param {*} nuevo_id a setear
     */
    set_id(nuevo_id){

        this.id = nuevo_id;
    }
}

/* ---------- Array ---------- */

let guitarrasStock = new Array();

let guitarras1 = new Guitarra ("Fender", "cuerdas", 120000, 18);
guitarras1.set_id(1);
let guitarras2 = new Guitarra ("Gibson", "soporte", 150000, 24);
guitarras2.set_id(2);
let guitarras3 = new Guitarra ("Jackson", "afinador", 110000, 12);
guitarras3.set_id(3);
let guitarras4 = new Guitarra ("Yamaha", "puas", 100000, 6); 
guitarras4.set_id(4);

/* ---------- Pusheo al Array ---------- */

guitarrasStock.push(guitarras1);
guitarrasStock.push(guitarras2);
guitarrasStock.push(guitarras3);
guitarrasStock.push(guitarras4);




const hoy = new Date();

alert ("¡Bienvenidos a nuestro local de compras! " + hoy.toLocaleString());

let opciones = true;
while (opciones) {
    let mensaje = "Indique lo que usted quiere hacer:";
    mensaje +=    "\n1) Elija que guitarra usted quiere comprar";
    mensaje +=    "\n2) Elija un adicional";
    mensaje +=    "\n3) Elija si pagarlo en cuotas o al contado";
    mensaje +=    "\n4) Salir";


let respuesta = prompt (mensaje);

    switch(respuesta){
        case "1":
            elegir_guitarra();
            break;
        
        case "2":
            elegir_adicional();
            break;
        
        case "3":
            opcion_de_pago();
            break;

        case "4":
            alert ("Gracias por utilizar nuestra pagina");
            opciones=false;
            break;
        }
    }


    /* ---------- Ingreso de datos del usuario ---------- */

    function ingresar_datos(){

        let check = true;

        while (check){
            let msj = "";
            let marca = prompt ("Ingrese la marca que desea comprar" + "\n 1) Guitarra Fender" + "\n 2) Guitarra Yamaha" + "\n 3) Guitarra Jackson" + "\n 4) Guitarra Gibson");
            let precio = prompt (("Ingrese el monto que quiera pagar o si desea pagarlo en cuotas"));

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
}



    /* ---------- Función para seleccionar la guitarra ---------- */

    


    function elegir_guitarra(){
        
        let guitarra = ingresar_datos();

        if (guitarra){
            guitarra.set_id(gen_id);
            gen_id++

            guitarrasStock.push(guitarra);
            alert ("Guitarra agregada con exito")
        }
    } 

    function elegir_adicional(){
        
        let guitarra = ingresar_datos();

        if (adicional){
            adicional.set_id(gen_id);
            gen_id++

            guitarrasStock.push(guitarra);
            alert ("Adicional agregada con exito")
        }
    } 





