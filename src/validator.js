const validator = {
  isValid: function (inputNumero) {

    var numberVa = inputNumero.split("");
    let numberLunh = numberVa.reverse();
    let arraySuma = 0;
    let sumaImpar = 0;
    let sumaTotal = 0;
    let sumaPar = 0;

    for (let i = 0; i < numberLunh.length; i++) {// si el número es impar se multiplica por 2, buscar la posicion y multiplicar,
      if (i % 2 === 1) {// posición Par 1}
        sumaPar = numberLunh[i] * 2; //multiplicación posición.
        if (sumaPar >= 10) {
          arraySuma = sumaPar.toString().split("")// se vuelve string y se separa.
          numberLunh[i] = parseInt(arraySuma[0]) + parseInt(arraySuma[1])// se suman entres si para dar un solo número.          
        } else {
          numberLunh[i] = sumaPar;// actualiza el valor de los Números par , que no se deben multiplicar
        }
        sumaTotal = parseInt(sumaTotal) + parseInt(numberLunh[i]);
      } else if (i % 2 === 0) {
        sumaImpar = parseInt(sumaImpar) + parseInt(numberLunh[i])
      }//almacenar los numeros impares.
    }// aqui cierra for 

    sumaTotal = sumaTotal + sumaImpar;// se suma los pares e impares.

    if (sumaTotal % 10 == 0) {
  
      return true
    }
    else {
   
      return false;
    }

  }// aquí se cierra la función
  ,// aquí inicia el mastify

  maskify: function (inputNumero) {

    let numberHidden = inputNumero.length;
    let masked = "";
      for (let i = 0; i < numberHidden - 4; i++) {
      masked += "#";
    }
    let maskeDigit = masked + inputNumero.substring(numberHidden - 4, numberHidden);
    return  maskeDigit
    //console.log(maskeDigit);
      }

  }
  ;
export default validator;
