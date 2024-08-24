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
var num1;
var num2;
var op;
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

        value = num1
    } else {

        value = num2
    }
    return value;
}

function calcDecimal(num, n) {


    if (n == 1) {
        valorDecimal = 0
        valorDecimal += parseInt(num, 2)

    } else if (n == 2) {
        valorDecimal2 = 0
        valorDecimal2 += parseInt(num, 2)
    }

}

function calcFracional(num, n) {

    if (n == 1) {
        var expoente = -1
        valorFracional = 0
        for (let i = 0; i <= num.length; i++) {
            console.log("espoente" + expoente);
            valorFracional += parseFloat(num.charAt(i) * (2 ** expoente))
            expoente -= 1;
        }

        console.log(valorFracional);

    } else if (n == 2) {
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
        calcDecimal((numm(1).substring(0, numm(1).indexOf("."))), 1)
        calcFracional(numm(1).substring(numm(1).length, numm(1).indexOf(".") + 1), 1)
        var calculo = valorDecimal + valorFracional
        spanDec.textContent = "Valor 1 - decimal: " + calculo
    }

}

function numDecimal2(num) {
    clean()
    let spanDec = document.getElementById("numero2Decimal")
    calcDecimal((numm(2).substring(0, numm(2).indexOf("."))), 2)
    calcFracional(numm(2).substring(numm(2).length, numm(2).indexOf(".") + 1), 2)
    var calculo = valorDecimal2 + valorFracional2
    console.log(calculo);
    spanDec.textContent = "Valor 2 - decimal: " + calculo
}

function adcionaNumAoDisplay(num) {
    var jatem = false
    var display = document.getElementById("display")
    if (num == "x") {

        display.value = display.value.substring(0, display.value.length - 1)
    } else if (num == ".") {
        if (display.value.includes(".") == false) {


            display.value += num;

        }


    } else {
        display.value += num;
    }











}

function soma() {
    var display = document.getElementById("display")
    num1 = display.value;
    display.value = ""

    document.getElementById('displayCalc').style.display = "flex"
    document.getElementById('displayCalc').textContent  = num1 + " +"
    op = "somar"
    numDecimal(num1)
}

function subtrair() {
    var display = document.getElementById("display")
    num1 = display.value;
    display.value = ""

    document.getElementById('displayCalc').style.display = "flex"
    document.getElementById('displayCalc').textContent  = num1 + " -"
    op = "subtrair"
    numDecimal(num1)

}
function multiplicar() {
    var display = document.getElementById("display")
    num1 = display.value;
    display.value = ""

    document.getElementById('displayCalc').style.display = "flex"
    document.getElementById('displayCalc').textContent  = num1 + " x"
    op = "multiplicar"
    numDecimal(num1)

}
function dividir() {
    var display = document.getElementById("display")
    num1 = display.value;
    display.value = ""

    document.getElementById('displayCalc').style.display = "flex"
    document.getElementById('displayCalc').textContent  = num1 + " ÷"
    op = "dividir"
    numDecimal(num1)

}


function calcularNovamente() {
    clean();
    document.getElementById("display").value = ""
    document.getElementById("displayCalc").style.display = "none"
    document.getElementById('btns').style.display = "grid";
    document.getElementById('info').style.display = "none";
    document.getElementById('btnCalc').style.display = "flex";
    document.getElementById('btnCalcNovamente').style.display = "none";
}

function calcular() {
    if (num1 != null) {
        var display = document.getElementById("display")
        
        num2 = display.value;
        document.getElementById('displayCalc').textContent  += " "+ num2 
        numDecimal2(num2)

        if ((numm(1) != "" && numm(2) != "") && (numm(1).includes(".") && numm(2).includes("."))) {


            var info = document.getElementById("info")
            info.style.display = "block"
            clean()

            console.log("tem , " + numm(1).indexOf(","));
            console.log(parseInt(numm(1)), 1);

            calcDecimal(parseInt(numm(1)), 1) // chama a função passando o decimal em binario pra ela
            calcDecimal(parseInt(numm(2)), 2) // chama a função passando o decimal em binario pra ela
            calcFracional(numm(1).substring(numm(1).length, numm(1).indexOf(".") + 1), 1) // chama a função passando o fracinado em binario pra ela
            calcFracional(numm(2).substring(numm(2).length, numm(2).indexOf(".") + 1), 2) // chama a função passando o fracinado em binario pra ela

            console.log(numm(1).substring(numm(1).length, numm(1).indexOf(".") + 1));
            console.log("d" + valorDecimal);
            console.log("f" + valorFracional);
            console.log((valorDecimal + valorFracional));
            console.log((valorDecimal2 + valorFracional2));


            if (op == "somar") {
                resultado = (valorDecimal + valorFracional) + (valorDecimal2 + valorFracional2)
            } else if (op == "subtrair") {
                resultado = (valorDecimal + valorFracional) - (valorDecimal2 + valorFracional2)
            } else if (op == "dividir") {
                resultado = (valorDecimal + valorFracional) / (valorDecimal2 + valorFracional2)
            } else {
                resultado = (valorDecimal + valorFracional) * (valorDecimal2 + valorFracional2)
            }


            var stringResultado = resultado.toString(2)



            var display = document.getElementById("display")
            display.value = stringResultado

            document.getElementById("resultado").textContent = `${stringResultado}`
            document.getElementById("resultadoDecimal").textContent = `Resultado - decimal: ${resultado}`


            calcIeee754(1)
        } else {
            alert("Digite os valores - Ex: 110.01")

            clean();
            document.getElementById("display").value = ""
            document.getElementById("displayCalc").style.display = "none"
        }
    }
    else {
        alert("Digite o segundo valor antes")
    }


    document.getElementById('btns').style.display = "none";
    document.getElementById('btnCalc').style.display = "none";
    
    document.getElementById('btnCalcNovamente').style.display = "flex";


}


function calcIeee754Resultado() {
    var resul = resultado.toString(2)
    var expoente1 = (resul.indexOf(".") - 1)

    if (expoente1 == -2) {
        expoente1 = resul.length - 1
    }
    console.log("--------+espoente : " + expoente1);
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
    document.getElementById('expBin').innerHTML = `Expoente ${(expoente1 + 127)} em Binario: ${(expoente1 + 127).toString(2)}`

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



    if (resultado > 0) {
        console.log("Como o " + resultado + " é positivo o bit sinal é 0");
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

function calcIeee754(num) {

    // 1 passo normalizar numero
    var expoente = (numm(num).indexOf(".") - 1)  //Expoente pra normalizar o binario
    var num1 = numm(num).replace('.', '')  //Retira o ponto
    var binNormalizado = numm(num).charAt(0) + "." + num1.substring(1, num1.length) // Cria o binario normalizado


    document.getElementById("bin").innerHTML = `Binario: ${numm(num)}`//Joga no html
    document.getElementById("binNormalizado").innerHTML = `Binario Normalizado : ${binNormalizado}   x2^${expoente}`//joga no html

    //2 passo Determinar bit de sinal
    var bitSinal;
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
    else {
        if ((valorDecimal2 + valorFracional2) > 0) {
            console.log("Como o " + (valorDecimal2 + valorFracional2) + " é positivo o bit sinal é 0");
            document.getElementById("bit").innerHTML = `Como o ${(valorDecimal2 + valorFracional2)} é positivo o bit sinal é 0 `
            bitSinal = 0;
        } else {
            document.getElementById("bit").innerHTML = `Como o ${(valorDecimal2 + valorFracional2)} é negativo o bit sinal é 1 `

            bitSinal = 1;
        }
    }
    //-----------------------------------------

    // 3 passo Calcular expoente
    document.getElementById('exp').innerHTML = `O expoente real é ${expoente}. Em formato de "excesso 127", 
    adicione 127 ao expoente real: ${expoente} + 127 = ${expoente + 127}`
    document.getElementById('expBin').innerHTML = `Expoente ${((numm(num).indexOf(".") - 1) + 127)} em Binario: ${(expoente + 127).toString(2)}`

    // 4 Determinar a mantissa

    var mantissaFracionada = num1.slice(1);  // Pega a parte fracionada do binario
    document.getElementById('fracBinNorm').innerHTML = `A parte fracionada da forma normalizada: ${mantissaFracionada}`

    var mantissa;
    // if else pra ver se a mantissa tem 23 bit 
    if (mantissaFracionada.length == 23) {
        mantissa = mantissaFracionada.substring(0, 22)
    } else {
        for (let i = mantissaFracionada.length; i < 23; i++) {
            mantissaFracionada += "0"
        }
    }
    // --------------------------------------------

    mantissa = mantissaFracionada
    document.getElementById('prencherComZeros').innerHTML = ` ${mantissa}` //joga no html

    ieee754N1 = bitSinal + " " + (expoente + 127).toString(2) + " " + mantissa // junta tudo e forma o ieee754 
    document.getElementById('resultadoIeee754').innerHTML = `${ieee754N1}` // joga no html


}
