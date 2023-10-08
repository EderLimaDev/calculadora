

// Função para apagar

function backspace() {
    var tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.substring(0, tela.length - 1);
    
}

// Função para incluir os dados na tela

function btnPressed(num) {
   var number = document.querySelector(".tela").innerHTML;
   document.querySelector(".tela").innerHTML = number + num;
    
}

// Função para calcular

function calculo() {
    var resultado = document.querySelector(".tela").innerHTML;
    if(resultado) {
        document.querySelector(".tela").innerHTML = eval(resultado);
    }
    
}

// Função para limpar

function clearTela() {
    document.querySelector('.tela').innerHTML = "";

}