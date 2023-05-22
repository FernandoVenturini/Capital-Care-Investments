const date = document.querySelector('.date');

const date_screen = new Date();
date.innerHTML = date_screen.toDateString();


/*CAROUSEL*/
const carousel = document.querySelector('.carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth;

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
      carouselContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    // Função para navegar para o próximo ou anterior slide
    function carouselScroll(direction) {
      currentIndex += direction;
      
      // Verificar limites dos slides
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      } else if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      
      updateCarousel();
    }

    // Adicionar eventos de clique nos botões
    prevBtn.addEventListener('click', () => carouselScroll(-1));
    nextBtn.addEventListener('click', () => carouselScroll(1));