$(function(){
    const btnMenu       = $('.menu-mobile');
    const interfaceMenu = $('.menu-mobile ul');

    btnMenu.click(function(){
        interfaceMenu.slideToggle();
    });
})

//aqui inicia o script de animação de slide do conteudo

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', function(){
        animeScroll();
        console.log('usuns')
    })
}

// aqui termina o script de animação de slide do conteudo

