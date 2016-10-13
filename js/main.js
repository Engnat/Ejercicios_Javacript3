//FACTORIAL -  SUMATORIA

var validarDecimal = function(n){
  return Number(n) === n && n % 1 !== 0;
};

var calcular = function(fun){
  return function(){
      var numeros_result = document.querySelector("#numeros_result");
      var input = document.querySelector("#numeros").value;
      var i = 1;
      var result = 0;
      if(!fun){
          while (i <= input) {
            result = result===0? i:result+i;//validaciòn terciaria
            i++;
          }
          result = input+ " = "+ result;
        }else {
          if(!fun(input)){
            while (i <= input) {
              result = result===0? i:result*i;//validaciòn terciaria
              i++;
          }
            result = input+ "! = "+ result;
          }else {
            result = "Número inválido";
          }

        }
        console.log(result);
        numeros_result.innerHTML = result;
    };
  };//Fin


//STRINGS
var manipularString = function(i){
  return function(){
      var palabras_result = document.querySelector("#palabras_result");
      var palabras = document.querySelector("#palabras").value;
      var nueva_cadena = String();
      var j;
      if(i){
        j = palabras.length -1;
        while(j >=0){
          nueva_cadena += palabras[j];
          j--;
        }
      }else {
        j = 0;
        var cadena_dividida = palabras.split(" ");
        cadena_dividida.forEach(function(key){
          console.log(key);
          if(j < key.length){
            j = key.length;
            nueva_cadena = key;
          }
        });
        nueva_cadena = "La longitud es:  "+ j + " La palabra más larga es: <b>"+ nueva_cadena + "</b>";
      }

      palabras_result.innerHTML = nueva_cadena;
      console.log(nueva_cadena);
      console.log(j);
  };


};
//Fin





document.addEventListener("DOMContentLoaded",function(){
  var btn_factorial = document.querySelector("#btn_factorial");
  var btn_sumatoria = document.querySelector("#btn_sumatoria");
  var btn_revertir = document.querySelector("#revertir");
  var btn_buscar = document.querySelector("#buscar");
  btn_factorial.addEventListener("click" , calcular(validarDecimal));
  btn_sumatoria.addEventListener("click" , calcular());
  btn_revertir.addEventListener("click" , manipularString(1));
  btn_buscar.addEventListener("click" , manipularString());


});
