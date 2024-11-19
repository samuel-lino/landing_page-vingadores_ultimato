document.addEventListener('DOMContentLoaded', function(){
    const assistir = document.querySelector('.assistir');
    const trailer = document.querySelector('.Vtrailer');
    const logo = document.querySelector('.header__logo');
    const hero = document.querySelector('.hero');
    const faqs = document.querySelectorAll('[data-faq-select]');

    window.addEventListener('scroll', function(){
        if(this.window.scrollY < hero.clientHeight){
            logo.classList.add('hidden');
            assistir.classList.add('hidden');
        }
        else{
            logo.classList.remove('hidden');
            assistir.classList.remove('hidden');
        }
    })

    faqs.forEach(faq=>{
        faq.addEventListener('click', function(){
            const parent = faq.parentElement;
            if(parent.classList.contains('faq__item--open')){
                parent.classList.remove('faq__item--open')
            }
            else{
                parent.classList.add('faq__item--open')
            }
        })
    })
})