const swiper = new Swiper('.news__slider-wrapper', {   
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
        nextEl: '.swiper-button-next',   
        prevEl: '.swiper-button-prev',   
    },   
    scrollbar: {   
        el: '.swiper-scrollbar',   
    },   
}); 

// Получаем элементы кнопок 
const nextButton = document.querySelector('.swiper-button-next'); 
const prevButton = document.querySelector('.swiper-button-prev'); 

// Скрытие левой кнопки и показ правой при клике 
prevButton.style.display = 'none'; // Скрыть левую кнопку 

nextButton.addEventListener('click', () => { 
    prevButton.style.display = 'block'; // Показать левую кнопку 
}); 
