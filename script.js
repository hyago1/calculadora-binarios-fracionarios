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

function calcDecimal(num1) {

    valorDecimal =0
    var expoente = num1.length - 1
    for (let i = 0; i <= num1.length; i++) {
        valorDecimal += parseInt(num1.charAt(i) * (2 ** expoente))
        expoente -= 1;
    }



}

function calcFracional(num1) {

    var expoente = -1
    valorFracional = 0
    for (let i = 0; i <= num1.length; i++) {
        console.log("espoente" + expoente);
        valorFracional += parseFloat(num1.charAt(i) * (2 ** expoente))
        expoente -= 1;
    }
    console.log(valorFracional);



}

function calcDecimal2(num2) {
    valorDecimal2 = 0;
    var expoente2 = num2.length - 1
    for (let i = 0; i <= num2.length; i++) {
        valorDecimal2 += parseInt(num2.charAt(i) * (2 ** expoente2))
        expoente2 -= 1;
    }
}

function calcFracional2(num2) {

    var expoente = -1
    valorFracional2 = 0;
    for (let i = 0; i <= num2.length; i++) {
        console.log("espoente" + expoente);
        valorFracional2 += parseFloat(num2.charAt(i) * (2 ** expoente))
        expoente -= 1;
    } console.log(valorFracional2);


}

function numDecimal(num) {

    if (numm(1).indexOf(".") != -1) {
        clean()
        let spanDec = document.getElementById("numero1Decimal")
        calcDecimal((numm(1).substring(0, numm(1).indexOf("."))))
        calcFracional(numm(1).substring(numm(1).length, numm(1).indexOf(".") + 1))
        var calculo = valorDecimal + valorFracional
        spanDec.textContent = "Valor 1 - decimal: " + calculo.toString()
    }


}
function numDecimal2(num) {
    clean()
    let spanDec = document.getElementById("numero2Decimal")
    calcDecimal2((numm(2).substring(0, numm(2).indexOf("."))))
    calcFracional2(numm(2).substring(numm(2).length, numm(2).indexOf(".") + 1))
    var calculo = valorDecimal2 + valorFracional2
    console.log(calculo);
    spanDec.textContent = "Valor 2 - decimal: " + calculo
}
function calcular() {




    if (numm(1) != "" || numm(2) != "") {

        var info = document.getElementById("info")
        info.style.display = "block"
        info.style.animationDuration = "1s"

        console.log("tem , " + numm(1).indexOf(","));
        clean()

        calcDecimal((numm(1).substring(0, numm(1).indexOf("."))))
        calcDecimal2((numm(2).substring(0, numm(2).indexOf("."))))
        calcFracional(numm(1).substring(numm(1).length, numm(1).indexOf(".") + 1))
        calcFracional2(numm(2).substring(numm(2).length, numm(2).indexOf(".") + 1))
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




        console.log(resultado);

        var stringResultado = resultado.toString(2)

        // document.getElementById("resultado").textContent = stringResultado 
        document.getElementById("resultado").textContent = `${stringResultado}`
        document.getElementById("resultadoDecimal").textContent = `Resultado - decimal: ${resultado}`
calcIeee754N1()


    } else {
        alert("Digite os valores")
    }




}

function calcIeee754N1() {
    var expoente1 = (numm(1).indexOf(".") - 1)
    var expoente2 = (numm(2).indexOf(".") - 1)
    var num1 = numm(1).replace('.', '')
    console.log(num1);

    document.getElementById("bin").innerHTML = `Binario: ${numm(1)}`
    var binNormalizado = numm(1).charAt(0) + "." + num1.substring(1, num1.length)
    document.getElementById("binNormalizado").innerHTML = `Binario Normalizado : ${binNormalizado}   x2^${expoente1}`
    console.log(binNormalizado);




    console.log("sem ponto: " + num1);
    var mantissaFracionada = num1.slice(1);
    document.getElementById('exp').innerHTML = `O expoente real é ${expoente1}. Em formato de "excesso 127", 
    adicione 127 ao expoente real: ${expoente1} + 127 = ${(numm(1).indexOf(".") - 1) + 127}`
    console.log("expoente: " + expoente1);
    console.log("Adcione 127 ao expoente : " + ((numm(1).indexOf(".") - 1) + 127));
    document.getElementById('expBin').innerHTML = `Expoente ${((numm(1).indexOf(".") - 1) + 127)} em Binario: ${(expoente1 + 127).toString(2)}`

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



    if ((valorDecimal + valorFracional) > 0) {
        console.log("Como o " + (valorDecimal + valorFracional) + " é positivo o bit sinal é 0");
        document.getElementById("bit").innerHTML = `Como o ${(valorDecimal + valorFracional)} é positivo o bit sinal é 0 `
        bitSinal = 0;
    } else {
        document.getElementById("bit").innerHTML = `Como o ${(valorDecimal + valorFracional)} é negativo o bit sinal é 1 `

        bitSinal = 1;
    }


    ieee754N1 = bitSinal + " " + (expoente1 + 127).toString(2) + " " + mantissa
    document.getElementById('resultadoIeee754').innerHTML = `${ieee754N1}`

    console.log("Calculo ieee754 do valor 1: ");



}


function calcIeee754N2() {

    var expoente1 = (numm(2).indexOf(".") - 1)
    var num2 = numm(2).replace('.', '')
    console.log(num2);

    document.getElementById("bin").innerHTML = `Binario: ${numm(2)}`
    var binNormalizado = numm(2).charAt(0) + "." + num2.substring(1, num2.length)
    document.getElementById("binNormalizado").innerHTML = `Binario Normalizado : ${binNormalizado}   x2^${expoente1}`
    console.log(binNormalizado);




    console.log("sem ponto: " + num2);
    var mantissaFracionada = num2.slice(1);
    console.log("Mantissa "+mantissaFracionada);
    
    document.getElementById('exp').innerHTML = `O expoente real é ${expoente1}. Em formato de "excesso 127", 
    adicione 127 ao expoente real: ${expoente1} + 127 = ${(numm(2).indexOf(".") - 1) + 127}`
    console.log("expoente: " + expoente1);
    console.log("Adcione 127 ao expoente : " + ((numm(2).indexOf(".") - 1) + 127));
    document.getElementById('expBin').innerHTML = `Expoente ${((numm(2).indexOf(".") - 1) + 127)} em Binario: ${(expoente1 + 127).toString(2)}`

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



    if ((valorDecimal2 + valorFracional2) > 0) {
        console.log("Como o " + (valorDecimal2 + valorFracional2) + " é positivo o bit sinal é 0");
        document.getElementById("bit").innerHTML = `Como o ${(valorDecimal2 + valorFracional2)} é positivo o bit sinal é 0 `
        bitSinal = 0;
    } else {
        document.getElementById("bit").innerHTML = `Como o ${(valorDecimal2 + valorFracional2)} é negativo o bit sinal é 1 `

        bitSinal = 1;
    }


    ieee754N2 = bitSinal + " " + (expoente1 + 127).toString(2) + " " + mantissa
    document.getElementById('resultadoIeee754').innerHTML = `${ieee754N2}`

    console.log("Calculo ieee754 do valor 1: ");




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