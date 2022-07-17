
//---------------------------------------- Entrega número 1 ------------------------------------------>



const anio_actual = 2022;
let nombre = prompt ("Ingrese su nombre:");
let apellido = prompt ("Ingrese su apellido:");
let anio_nac = parseInt(prompt ("Ingrese su año de nacimiento:"));


while(!nombre){
    nombre = nombre = prompt ("Ingrese su nombre:");
}


while(!apellido){
    apellido = apellido = prompt ("Ingrese su apellido:");
}


    if(isNaN(anio_nac)){
        alert ("El dato ingresado no es un número");
    }else{
        alert ("Ingresaste un dato correcto")
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
}


