let display = document.getElementById('display')

let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

let comecar = document.getElementById('comecar')
let parar = document.getElementById('parar')
let pausar = document.getElementById('pausar')
let despausar = document.getElementById('despausar')

let minutoAtual
let segundoAtual

let interval;


comecar.addEventListener('click', function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
    
    interval = setInterval(function(){

        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual --;
                segundoAtual = 59;
            } else {
                document.getElementById('h1Acabou').innerHTML = 'Acabou!';;
                document.getElementById("sound").play();
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
    },1000);
})

parar.addEventListener('click', function(){
    clearInterval(interval);
    segundos.value = 0;
    minutos.value = 0;
    minutoAtual.value = 0;
    segundoAtual.value = 0;
    display.childNodes[1].innerHTML = minutoAtual = 0;  ":"; segundoAtual = 0;
})
pausar.addEventListener('click', function(){
    clearInterval(interval);
})
despausar.addEventListener('click', function(){
    interval = setInterval(function(){

        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual --;
                segundoAtual = 59;
            } else {
                document.getElementById('h1Acabou').innerHTML = 'Acabou!';;
                document.getElementById("sound").play();
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
    },1000);
})
