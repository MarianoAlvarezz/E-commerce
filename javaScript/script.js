
//---------------------------------------- Entrega número 1 ------------------------------------------>



/* const anio_actual = 2022;
let nombre = prompt ("Ingrese su nombre:");
let apellido = prompt ("Ingrese su apellido:");
let anio_nac = parseInt(prompt ("Ingrese su año de nacimiento:"));


while(!nombre){
    nombre = nombre = prompt ("Ingrese su nombre:");
}


while(!apellido){
    apellido = apellido = prompt ("Ingrese su apellido:");
}

while(!anio_nac){
    if(isNaN(anio_nac)){
        anio_nac = anio_nac = prompt ("Ingrese su año de nacimiento:");
    }
}

let edad = anio_actual - anio_nac; 

let mensaje = "¿Confirma que los datos ingresados son correctos?";

mensaje += "\n" + "Nombre: " + nombre;
mensaje += "\n" + "Apellido: " + apellido;
mensaje += "\n" + "Edad: " + edad;


let respuesta = confirm (mensaje);


if (respuesta) {

    alert ("Los datos ingresados son correctos");
}else{
    alert("Vuelva a ingresar los datos");
} */


//---------------------------------------- Entrega número 2 ------------------------------------------>


const seisCuotas = 6;
const doceCuotas = 12;
const dieciochoCuotas = 18;
const veinticuatroCuotas = 24;

let valorGuitarra = 123000;

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
    alert ("Muchas gracias por su compra!");

