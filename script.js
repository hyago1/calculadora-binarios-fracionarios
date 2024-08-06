var valorDecimal = 0;
var valorFracional = 0;
var valorDecimal2 = 0;
var valorFracional2 = 0;
var valorDecimalB = 0;
var valorFracionalB = 0;
var valorDecimal2B = 0;
var valorFracional2B = 0;
var resultado 
var ieee754N1;
var ieee754N2;

function clean() {
    valorDecimal = 0;
    valorFracional = 0;
    valorDecimal2 = 0;
    valorFracional2 = 0;
    valorDecimalB = 0;
    valorFracionalB = 0;
    valorDecimal2B = 0;
    valorFracional2B = 0;
    ieee754N1 = 0;
}
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

function calcDecimal(num , n) {

    if (n==1) {
        valorDecimal =0
    var expoente = num.length - 1
    for (let i = 0; i <= num.length; i++) {
        valorDecimal += parseInt(num.charAt(i) * (2 ** expoente))
        expoente -= 1;
    }
    }else if (n == 2) {
        valorDecimal2 = 0;
        var expoente2 = num.length - 1
        for (let i = 0; i <= num.length; i++) {
            valorDecimal2 += parseInt(num.charAt(i) * (2 ** expoente2))
            expoente2 -= 1;
        }
    } 
 

}

function calcFracional(num,n) {

    if (n == 1) {
     
    var expoente = -1
    valorFracional = 0
    for (let i = 0; i <= num.length; i++) {
        console.log("espoente" + expoente);
        valorFracional += parseFloat(num.charAt(i) * (2 ** expoente))
        expoente -= 1;
    }
    console.log(valorFracional);
   
    }else if(n == 2){

        var expoente = -1
        valorFracional2 = 0
        for (let i = 0; i <= num.length; i++) {
            console.log("espoente" + expoente);
            valorFracional2 += parseFloat(num.charAt(i) * (2 ** expoente))
            expoente -= 1;
        }
        console.log(valorFracional2);
    
    }


}

function numDecimal(num) {

    if (numm(1).indexOf(".") != -1) {
        clean()
        let spanDec = document.getElementById("numero1Decimal")
        calcDecimal((numm(1).substring(0, numm(1).indexOf("."))),1)
        calcFracional(numm(1).substring(numm(1).length, numm(1).indexOf(".") + 1),1)
        var calculo = valorDecimal + valorFracional
        spanDec.textContent = "Valor 1 - decimal: " + calculo.toString()
    }

}
function numDecimal2(num) {
    clean()
    let spanDec = document.getElementById("numero2Decimal")
    calcDecimal((numm(2).substring(0, numm(2).indexOf("."))),2)
    calcFracional(numm(2).substring(numm(2).length, numm(2).indexOf(".") + 1),2)
    var calculo = valorDecimal2 + valorFracional2
    console.log(calculo);
    spanDec.textContent = "Valor 2 - decimal: " + calculo
}
function calcular() {


    if (numm(1) != "" || numm(2) != "") {

        var info = document.getElementById("info")
        info.style.display = "block"
        clean()
       
        console.log("tem , " + numm(1).indexOf(","));
        
        
        calcDecimal((numm(1).substring(0, numm(1).indexOf("."))),1) // chama a função passando o decimal em binario pra ela
        calcDecimal((numm(2).substring(0, numm(2).indexOf("."))),2) // chama a função passando o decimal em binario pra ela
        calcFracional(numm(1).substring(numm(1).length, numm(1).indexOf(".") + 1),1) // chama a função passando o fracinado em binario pra ela
        calcFracional(numm(2).substring(numm(2).length, numm(2).indexOf(".") + 1),2) // chama a função passando o fracinado em binario pra ela
        
        console.log(numm(1).substring(numm(1).length, numm(1).indexOf(".") + 1));
        console.log("d" + valorDecimal);
        console.log("f" + valorFracional);
        console.log((valorDecimal + valorFracional));
        console.log((valorDecimal2 + valorFracional2));

        let op = document.getElementById("op")
        if (op.value == "somar") {
             resultado = (valorDecimal + valorFracional) + (valorDecimal2 + valorFracional2)
        } else if (op.value == "subtrair") {
             resultado = (valorDecimal + valorFracional) - (valorDecimal2 + valorFracional2)
        } else {
             resultado = (valorDecimal + valorFracional) * (valorDecimal2 + valorFracional2)
        }

        var stringResultado = resultado.toString(2)
 
        document.getElementById("resultado").textContent = `${stringResultado}`
        document.getElementById("resultadoDecimal").textContent = `Resultado - decimal: ${resultado}`
        calcIeee754(1)
    } else {
        alert("Digite os valores")
    }

}


function calcIeee754Resultado() {
    var resul = resultado.toString(2)
    var expoente1 = (resul.indexOf(".") - 1)
    var numResul = resul.replace('.', '')
    console.log(numResul);

    document.getElementById("bin").innerHTML = `Binario: ${resul}`
    var binNormalizado = resul.charAt(0) + "." + numResul.substring(1, numResul.length)
    document.getElementById("binNormalizado").innerHTML = `Binario Normalizado : ${binNormalizado}   x2^${expoente1}`
    console.log(binNormalizado);




    console.log("sem ponto: " + numResul);
    var mantissaFracionada = numResul.slice(1);
    document.getElementById('exp').innerHTML = `O expoente real é ${expoente1}. Em formato de "excesso 127", 
    adicione 127 ao expoente real: ${expoente1} + 127 = ${(resul.indexOf(".") - 1) + 127}`
    console.log("expoente: " + expoente1);
    console.log("Adcione 127 ao expoente : " + ((resul.indexOf(".") - 1) + 127));
    document.getElementById('expBin').innerHTML = `Expoente ${(expoente1+ 127)} em Binario: ${(expoente1 + 127).toString(2)}`

    var bitSinal;
    document.getElementById('fracBinNorm').innerHTML = `A parte fracionada da forma normalizada: ${mantissaFracionada}`

    var mantissa;

    // console.log("Adcione zeros a esquerda caso a parte fracionada nao tiver 23 bits");

    if (mantissaFracionada.length == 23) {

        mantissa = mantissaFracionada.substring(0, 22)



    }
    else {
        for (let i = mantissaFracionada.length; i < 23; i++) {
            mantissaFracionada += "0"


        }
    }
    console.log("Adcionando zeros ate chegar a 23 bits:");

    mantissa = mantissaFracionada
    document.getElementById('prencherComZeros').innerHTML = ` ${mantissa}`

    console.log(mantissa);



    if (resultado> 0) {
        console.log("Como o " + resultado+ " é positivo o bit sinal é 0");
        document.getElementById("bit").innerHTML = `Como o ${resultado} é positivo o bit sinal é 0 `
        bitSinal = 0;
    } else {
        document.getElementById("bit").innerHTML = `Como o ${resultado} é negativo o bit sinal é 1 `

        bitSinal = 1;
    }


    ieee754N2 = bitSinal + " " + (expoente1 + 127).toString(2) + " " + mantissa
    document.getElementById('resultadoIeee754').innerHTML = `${ieee754N2}`

    console.log("Calculo ieee754 do valor 1: ");




}

function calcIeee754(num) {  // Função calcular o ieee754 dos valores.

    var expoente = (numm(num).indexOf(".") - 1)  //Expoente pra normalizar o binario
    var num1 = numm(num).replace('.', '')  //Retira o ponto


    document.getElementById("bin").innerHTML = `Binario: ${numm(num)}`//Joga no html

    var binNormalizado = numm(num).charAt(0) + "." + num1.substring(1, num1.length) // Cria o binario normalizado
    document.getElementById("binNormalizado").innerHTML = `Binario Normalizado : ${binNormalizado}   x2^${expoente}`//joga no html


    console.log(binNormalizado);
    console.log("sem ponto: " + num1);
    var mantissaFracionada = num1.slice(1);  // Pega a parte fracionada do binario
    document.getElementById('exp').innerHTML = `O expoente real é ${expoente}. Em formato de "excesso 127", 
    adicione 127 ao expoente real: ${expoente} + 127 = ${expoente + 127}`
    document.getElementById('expBin').innerHTML = `Expoente ${((numm(num).indexOf(".") - 1) + 127)} em Binario: ${(expoente + 127).toString(2)}`

    var bitSinal;
    document.getElementById('fracBinNorm').innerHTML = `A parte fracionada da forma normalizada: ${mantissaFracionada}`

    var mantissa;


// if else pra ver se a mantissa tem 23 bit ----
    if (mantissaFracionada.length == 23) { 
        mantissa = mantissaFracionada.substring(0, 22)
    }
    else {
        for (let i = mantissaFracionada.length; i < 23; i++) {
            mantissaFracionada += "0"
      }
    }
// --------------------------------------------



    console.log("Adcionando zeros ate chegar a 23 bits:");

    mantissa = mantissaFracionada 
    document.getElementById('prencherComZeros').innerHTML = ` ${mantissa}` //joga no html


// if else pra ver se o bit de sinal é 0
if (num == 1) {
  if ((valorDecimal + valorFracional) > 0) {
        console.log("Como o " + (valorDecimal + valorFracional) + " é positivo o bit sinal é 0");
        document.getElementById("bit").innerHTML = `Como o ${(valorDecimal + valorFracional)} é positivo o bit sinal é 0 `
        bitSinal = 0;
    } else {
        document.getElementById("bit").innerHTML = `Como o ${(valorDecimal + valorFracional)} é negativo o bit sinal é 1 `

        bitSinal = 1;
    }  
}
else{
    if ((valorDecimal2 + valorFracional2) > 0) {
        console.log("Como o " + (valorDecimal2 + valorFracional2) + " é positivo o bit sinal é 0");
        document.getElementById("bit").innerHTML = `Como o ${(valorDecimal2 + valorFracional2)} é positivo o bit sinal é 0 `
        bitSinal = 0;
    } else {
        document.getElementById("bit").innerHTML = `Como o ${(valorDecimal2 + valorFracional2)} é negativo o bit sinal é 1 `

        bitSinal = 1;
    }  
}
    
//-------------------------------------------



    ieee754N1 = bitSinal + " " + (expoente + 127).toString(2) + " " + mantissa // junta tudo e forma o ieee754 
    document.getElementById('resultadoIeee754').innerHTML = `${ieee754N1}` // joga no html

    console.log("Calculo ieee754 do valor 1: ");



}
