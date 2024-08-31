// Инициализация слайдера новостей
const news = new Swiper('.news__slider-wrapper', {    
    direction: 'horizontal',    
    loop: true,    
    slidesPerView: 1,    
    spaceBetween: 10,    
    breakpoints: {    
        320: {    
            slidesPerView: 1,    
            spaceBetween: 20    
        },    
        760: {    
            slidesPerView: 2,    
            spaceBetween: 30    
        },    
        1400: {    
            slidesPerView: 3,    
            spaceBetween: 40    
        }    
    },    
    pagination: {    
        el: '.swiper-pagination',    
    },    
    navigation: {    
        nextEl: '.s-button-next',    
        prevEl: '.s-button-prev',    
    },    
    scrollbar: {    
        el: '.swiper-scrollbar',    
    },    
});  

document.addEventListener('DOMContentLoaded', () => { 
    // Инициализация слайдера партнеров
    const partnersSlider = new Swiper('.partners__slider-wrapper', { 
        direction: 'horizontal',    
        loop: true,    
        slidesPerView: 1,    
        spaceBetween: 0,    
        breakpoints: {    
            320: {    
                slidesPerView: 1,    
                spaceBetween: 20    
            },    
            760: {    
                slidesPerView: 2,    
                spaceBetween: 30    
            },    
            1400: {    
                slidesPerView: 5,    
                spaceBetween: 0,   
            }    
        },    
        pagination: {    
            el: '.swiper-pagination',    
        },    
        navigation: {    
            nextEl: '.s-button-next',    
            prevEl: '.s-button-prev',    
        },    
        scrollbar: {    
            el: '.swiper-scrollbar',    
        },    
    });

    // Получаем элементы кнопок  
    const nextButton = document.querySelector('.s-button-next');  
    const prevButton = document.querySelector('.s-button-prev');  

    // Скрытие левой кнопки и показ правой при клике  
    prevButton.style.display = 'none'; // Скрыть левую кнопку  

    nextButton.addEventListener('click', () => {  
        prevButton.style.display = 'block'; // Показать левую кнопку  
    });

    // Дополнительное скрытие кнопки "Назад", если слайдер на первом слайде
    partnersSlider.on('slideChange', () => {
        if (partnersSlider.isBeginning) {
            prevButton.style.display = 'none'; // Скрыть кнопку "Назад" на первом слайде
        } else {
            prevButton.style.display = 'block'; // Показать кнопку "Назад" на остальных слайдах
        }
    });
});
