var apart = document.getElementById('Ap')
var style = document.getElementById('style')
var style2 = document.getElementById('style2')

function Aumentarimg(){
    style.innerHTML = `
    #trocacena{
        bottom: 0;
        opacity: 100;
        transition: 0.7s;
        display: flex;
        z-index: 9;
        position:absolute;
        justify-content: center;
    }
        .tomabrasilkkj{
        height: 70vh;
        width: 70vw;
        left: 25%;
        transition: 0.7s;
        position: relative;
        z-index: 7;
        display: flex;
        justify-content: center;

    }
        .tomabrasilkkj img{
            height: 70vh;
            width: 70vw;
            z-index: 8;
            position: absolute;
            transition: 0.7s;
            object-fit: fill;
        }
    `
}

function tirahover(){
    style2.innerHTML = ``
}