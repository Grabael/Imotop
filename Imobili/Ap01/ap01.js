var apart = document.getElementById('Ap')
var style = document.getElementById('style')
var style2 = document.getElementById('style2')
var Apinteiro = document.getElementById('inteira')

function vizualizar(){
    Apinteiro.innerHTML = `
    <div class="Apinteiro"><img src="./ap01.jpg" alt="Fuzzy Cardigan" class="img-thumbnail mb-3 d-none d-sm-block">
    <div id="trocacena">
    <a id="esquerda">Esquerda</a>
    <a id="direita">Direita</a>
    </div>
    </div>
    `
    style.innerHTML = `
    #inteira{
        position: fixed;
        bottom: 0;
        z-index: 8;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5)
    }
    `
}
function tirahover(){
    style2.innerHTML = ``
}