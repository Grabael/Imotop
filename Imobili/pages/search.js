var inputValor = document.querySelector('[name=valor]')
var outputValor = document.querySelector('[name=valor-imov]')

function mostraTamanho(){
    outputValor.value = inputValor.value;
    outputValor.textContent = event.target.value
}
inputValor.oniput = mostraTamanho;
inputValor.onchange = mostraTamanho;

 function aumentarValor(){
     inputValor.value = parseInt(inputValor.value) + 100000
     outputValor.value = inputValor.value
     
 }
 function diminuirValor(){
    inputValor.value -= 100000
    outputValor.value = inputValor.value
}
outputValor.value = inputValor.value