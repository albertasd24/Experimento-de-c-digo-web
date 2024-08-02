const navBar = document.getElementById('navbar');
const buttonNav = document.getElementById('button-nav');
const buttonColapse = document.getElementById('question__button');
const buttonsCollapseQuestions = document.querySelectorAll('#icon-colapse-question')

// Boton Hamburguesa Renposive
buttonNav.addEventListener('click', (e) => {
    navBar.classList.toggle('show')
})

// Sección de preguntas. Boton desplegable
buttonsCollapseQuestions.forEach((btn)=> {
    btn.addEventListener('click', (e) => {
        const question = btn.closest('.question');
        question.classList.toggle('question-colapse');
        if (btn.classList.contains('fa-plus')) {
            btn.classList.toggle('fa-minus');
            btn.classList.remove('fa-plus');
        }else{
            btn.classList.remove('fa-minus');
            btn.classList.toggle('fa-plus');
        }
    })
 
})

// Testimonios
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth;
const totalItems = items.length;
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function cloneItems() {
    for (let i = 0; i < totalItems; i++) {
        const clone = items[i].cloneNode(true);
        carousel.appendChild(clone);
    }
}

function moveNext() {
    if (currentIndex >= totalItems) {
        currentIndex = 0;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(0px)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
            currentIndex++;
            updateCarousel();
        }, 20);
    } else {
        currentIndex++;
        updateCarousel();
    }
}

function movePrev() {
    if (currentIndex <= 0) {
        currentIndex = totalItems;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
            currentIndex--;
            updateCarousel();
        }, 20);
    } else {
        currentIndex--;
        updateCarousel();
    }
}

cloneItems();

nextButton.addEventListener('click', moveNext);
prevButton.addEventListener('click', movePrev);