var valorDecimal = 0;
var valorFracional = 0;
var valorDecimal2 = 0;
var valorFracional2 = 0;
var valorDecimalB = 0;
var valorFracionalB = 0;
var valorDecimal2B = 0;
var valorFracional2B = 0;

function numm(num) {
    var value;
    if (num == 1) {
        var num1 = document.getElementById("num1").value
        value = num1
    } else {
        var num2 = document.getElementById("num2").value
        value = num2
    }
    return value;
}

function calcDecimal(num1) {


    var expoente = num1.length - 1
    for (let i = 0; i <= num1.length; i++) {
        valorDecimal += parseInt(num1.charAt(i) * (2 ** expoente))
        expoente -= 1;
    }



}

function calcFracional(num1) {

    var expoente = -1

    for (let i = 0; i <= num1.length; i++) {
        console.log("espoente" + expoente);
        valorFracional += parseFloat(num1.charAt(i) * (2 ** expoente))
        expoente -= 1;
    }
    console.log(valorFracional);
    

 
}

function calcDecimal2(num2) {

    var expoente2 = num2.length - 1
    for (let i = 0; i <= num2.length; i++) {
        valorDecimal2 += parseInt(num2.charAt(i) * (2 ** expoente2))
        expoente2 -= 1;
    }
    }
    
function calcFracional2(num2) {

    var expoente = -1

    for (let i = 0; i <= num2.length; i++) {
        console.log("espoente" + expoente);
        valorFracional2 += parseFloat(num2.charAt(i) * (2 ** expoente))
        expoente -= 1;
    }
 
}


function calcular() {
    

    calcDecimal((numm(1).substring(0, numm(1).indexOf(","))))
    calcDecimal2((numm(2).substring(0, numm(2).indexOf(","))))
    calcFracional(numm(1).substring(numm(1).length,numm(1).indexOf(",")+1))
    calcFracional2(numm(2).substring(numm(2).length,numm(2).indexOf(",")+1))
console.log(numm(1).substring(numm(1).length,numm(1).indexOf(",")+1));

console.log("d"+valorDecimal);
console.log("f"+valorFracional);
console.log((valorDecimal + valorFracional));
console.log((valorDecimal2 + valorFracional2));
let op = document.getElementById("op")
if (op.value == "somar") {
    var resultado = (valorDecimal + valorFracional)+(valorDecimal2+valorFracional2)
}else if (op.value == "subtrair") {
    var resultado = (valorDecimal + valorFracional)-(valorDecimal2+valorFracional2)
} else {
    var resultado = (valorDecimal + valorFracional)*(valorDecimal2+valorFracional2)
}
  



    console.log(resultado);
    
    var stringResultado = resultado.toString(2)
    
document.getElementById("resultado").textContent = stringResultado 


 valorDecimal = 0;
valorFracional = 0;
 valorDecimal2 = 0;
 valorFracional2 = 0;
  valorDecimalB = 0;
  valorFracionalB = 0;
valorDecimal2B = 0;
valorFracional2B = 0;

    

}




