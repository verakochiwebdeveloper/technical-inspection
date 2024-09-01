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

document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (e) { 
        e.preventDefault(); 
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        }); 
    }); 
});


function updateCopyrightYear(startYear) {
    let currentYear = new Date().getFullYear();
    let yearSpan = document.getElementById('year');

    if (currentYear > startYear) {
        yearSpan.textContent = `${startYear} - ${currentYear}`;
    } else {
        yearSpan.textContent = startYear;
    }
}

// Вызов функции с годом создания сайта
updateCopyrightYear(2024);

document.addEventListener('DOMContentLoaded', function() {
    const certImage = document.getElementById('certImage');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const closePopup = document.getElementById('closePopup');

    certImage.addEventListener('click', function() {
        popup.style.display = 'block';
        popupImage.src = certImage.src; // Устанавливаем источник изображения в попапе
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none'; // Закрываем попап
    });

    // Закрытие попапа при клике вне изображения
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

