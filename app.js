
let x = 0;
let y = 0;
let newOperator = '';
let result = '';

// Função para apagar

function backspace() {
    const tela = document.querySelector(".visor-parcial").innerHTML;
    const telaCompleta = document.querySelector(".visor-calculo-completo").innerHTML; 
    
    if(result === '' && tela !== NaN) {
        if(tela === NaN) {
            newOperator = ''
            document.querySelector(".visor-calculo-completo").innerHTML = telaCompleta.substring(0, telaCompleta.length - 1);
        } else {
            document.querySelector(".visor-parcial").innerHTML = tela.substring(0, tela.length - 1);
            document.querySelector(".visor-calculo-completo").innerHTML = telaCompleta.substring(0, telaCompleta.length - 1);
        }
    } else {
        if(tela !== '') {
            document.querySelector(".visor-parcial").innerHTML = tela.substring(0, tela.length - 1);
        } else {
            result = '';
        }
    }   
   
}

// Função para incluir os dados na tela

function btnPressed(num) {
   const number = document.querySelector(".visor-parcial").innerHTML;
   document.querySelector(".visor-parcial").innerHTML = number + num;

   const number2 = document.querySelector(".visor-calculo-completo").innerHTML;
   document.querySelector(".visor-calculo-completo").innerHTML = number2 + num;


}

// Função para selecionar operador

function operator(selectedOperator) {
    switch (selectedOperator) {
        case "+":
            if(document.querySelector(".visor-parcial").innerHTML === '') {
                x = Number(document.querySelector(".visor-calculo-completo").innerHTML)
                newOperator = sum
                document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
            } else {
                x = Number(document.querySelector(".visor-parcial").innerHTML)
                newOperator = sum
                document.querySelector(".visor-parcial").innerHTML = '';
                document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
            }
            break;
            
        case "-": 

             if(document.querySelector(".visor-parcial").innerHTML === '') {
                x = Number(document.querySelector(".visor-calculo-completo").innerHTML)
                newOperator = subtraction
                document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
            } else {
                x = Number(document.querySelector(".visor-parcial").innerHTML)
                newOperator = subtraction
                document.querySelector(".visor-parcial").innerHTML = '';
                document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
            }
            break;

        case "÷":
            if(document.querySelector(".visor-parcial").innerHTML === '') {
                x = Number(document.querySelector(".visor-calculo-completo").innerHTML)
                newOperator = division
                document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
            } else { 
            x = Number(document.querySelector(".visor-parcial").innerHTML)
            newOperator = division
            document.querySelector(".visor-parcial").innerHTML = '';
            document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
            }
            break;

        case "x":
            if(document.querySelector(".visor-parcial").innerHTML === '') {
                x = Number(document.querySelector(".visor-calculo-completo").innerHTML)
                newOperator = multiply
                document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
            } else { 
            x = Number(document.querySelector(".visor-parcial").innerHTML)
            newOperator = multiply
            document.querySelector(".visor-parcial").innerHTML = '';
            document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
            }
            break;
            case "%":
                if(document.querySelector(".visor-parcial").innerHTML === '') {
                    x = Number(document.querySelector(".visor-calculo-completo").innerHTML)
                    newOperator = percent
                    document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
                } else { 
                x = Number(document.querySelector(".visor-parcial").innerHTML)
                newOperator = percent
                document.querySelector(".visor-parcial").innerHTML = '';
                document.querySelector(".visor-calculo-completo").innerHTML = x + selectedOperator
                }
                break;        

        

        default:
            break;
    }
} 

// Função para calcular

function calculate(x, operador, y) {
   y = Number(document.querySelector(".visor-parcial").innerHTML)
   document.querySelector(".visor-parcial").innerHTML = '';
   result = document.querySelector(".visor-parcial").innerHTML = operador(x, y)
   console.log(result);
}

function sum(x, y) {
    return x + y
}

function subtraction(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function division(x, y) {
    return x / y
}

function percent(x, y) {
    return (x * y) / 100
}



// Função para limpar

function clearTela() {
   
    x = 0;
    y = 0;
    newOperator = '';
    result = '';
    document.querySelector('.visor-parcial').innerHTML = "";
    document.querySelector(".visor-calculo-completo").innerHTML = ''; 

}