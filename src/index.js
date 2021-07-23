import validator from './validator.js';

//console.log(validator);

let inputAdd = document.getElementById("inputNumero");
//console.log(inputAdd, "numero recibido de tarjeta" );


document.getElementById("btn").addEventListener("click", () => {
  let valorInput = validator.isValid(inputAdd.value);
  //console.log(valorInput);// arroja verdadero o falso.

  let maskify3 = validator.maskify(inputAdd.value);
  //console.log(maskify3);// muestra la mascara
  
   document.getElementById("inputRespuesta").value = maskify3;

   if(valorInput === true){
     document.getElementById("mensajeValido").innerHTML="Tarjeta valida"
   }else{
    document.getElementById("mensajeValido").innerHTML="Tarjeta NO valida"
   }

}); // cierra el 1° document
/* funcion del imput del formulario */

document.getElementById("validarInformacion").addEventListener("click", () => { vaResultado() });

/*Dar la funcionalidad ala interfaz */
function vaResultado() {
  document.getElementById("primera").style.display = "none"
  document.getElementById("segunda").style.display = "block"
}

document.getElementById("respuesta").addEventListener("click", () => { vaResultado2() });

/*Dar la funcionalidad ala interfaz, prueba de retorno a la pagina principal */
function vaResultado2() {
  document.getElementById("segunda").style.display = "none"
  document.getElementById("primera").style.display = "block"

}

