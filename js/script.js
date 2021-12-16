$(function(){
    const btnMenu       = $('.menu-mobile');
    const interfaceMenu = $('.menu-mobile ul');
    
    btnMenu.click(function(){
        interfaceMenu.slideToggle(0300);
    });
})

$(function(){
    const header = $('header');
    const menuMobileUl = $('nav.menu-mobile ul');
    const menuMobileLi = $('nav.menu-mobile li');
    $(window).scroll(function(){
        if($(this).scrollTop() > 150){
            header.css('padding','10px 0');
            header.css('background-color','#ff966c');
            menuMobileUl.css('top',60);
            menuMobileLi.css('background-color','#ff966c');
            menuMobileLi.css('border-top','1px solid #e48864');
        }
        else{
            header.css('background-color','rgba(46, 46, 46, 0.698)');
            header.css('padding','18px 0');
            menuMobileUl.css('top',75);
            menuMobileLi.css('background-color','rgb(37, 34, 34)');
            menuMobileLi.css('border-top','1px solid rgb(51, 51, 51)');
        }
    })
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

