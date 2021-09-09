
var menu = document.querySelector('.btn-menu')
var navig = document.querySelector('#navigation')
menu.addEventListener("click", atv_menu);


//var navig = document.querySelector('#navigation').classList
function atv_menu (){

    menu.classList.toggle('btn-abrir-fechar');
    navig.classList.toggle('active');
}



