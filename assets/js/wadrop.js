// Añade clase a body cuando se hace scroll
window.addEventListener("scroll", function() {
    if (window.scrollY > 180) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

// Añade drag para los elementos con scroll horizontal
document.addEventListener('DOMContentLoaded', (event) => {
    const sliders = document.querySelectorAll('.is-style-group-horizontal-scroll');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    // Añade el evento a cada slider
    sliders.forEach(slider => {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        });
    });
  
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el carousel
    var $carousel = jQuery('.box-color-backdrop .wp-block-cb-carousel');

    // Selecciona los botones
    var prevButton = document.querySelector('.btn-prev-slide');
    var nextButton = document.querySelector('.btn-next-slide');

    //Función para actualizar el estado de los botones
     function updateButtons(currentSlide, slideCount) {
        if (currentSlide === 0) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }
    
        if (currentSlide === slideCount - 1) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    // Asegúrate de que los botones existen
    if (prevButton && nextButton) {
        // Asegúrate de que el carousel esté inicializado
        if ($carousel.hasClass('slick-initialized')) {
            // Añade eventos a los botones
            prevButton.addEventListener('click', function(event) {
                if (!prevButton.classList.contains('disabled')) {
                    $carousel.slick('slickPrev');
                }
            });

            nextButton.addEventListener('click', function(event) {
                if (!nextButton.classList.contains('disabled')) {
                    $carousel.slick('slickNext');
                }
            });

            // Actualiza el estado de los botones al cargar
            updateButtons($carousel.slick('slickCurrentSlide'), $carousel.slick('getSlick').slideCount);

            // Actualiza el estado de los botones después de cambiar de slide
            $carousel.on('afterChange', function(event, slick, currentSlide) {
                updateButtons(currentSlide, slick.slideCount);
            });

        } else {
            // Si el carousel no está inicializado, espera a que se inicialice
            $carousel.on('init', function(event, slick) {
                // Añade eventos a los botones
                prevButton.addEventListener('click', function(event) {
                    if (!prevButton.classList.contains('disabled')) {
                        $carousel.slick('slickPrev');
                    }
                });

                nextButton.addEventListener('click', function(event) {
                    if (!nextButton.classList.contains('disabled')) {
                        $carousel.slick('slickNext');
                    }
                });

                // Actualiza el estado de los botones al cargar
                updateButtons(slick.currentSlide, slick.slideCount);
            });

            // Actualiza el estado de los botones después de cambiar de slide
            $carousel.on('afterChange', function(event, slick, currentSlide) {
                updateButtons(currentSlide, slick.slideCount);
            });
        }
    } else {
        console.error('Los botones .btn-prev-slide y/o .btn-next-slide no se encontraron en el DOM.');
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Obtén todos los elementos .toggle-wp-block-partners
    const toggles = document.querySelectorAll('.toggle-wp-block-partners');

    // Itera sobre cada toggle
    toggles.forEach((toggle, index) => {
        // Agrega un event listener para el evento click
        toggle.addEventListener('click', function() {
            // Obtén el elemento .wp-block-partners correspondiente
            const partners = document.querySelectorAll('.wp-block-partners')[index];

            // Si el elemento .wp-block-partners existe
            if (partners) {
                // Togglear la clase is-open
                partners.classList.toggle('wp-block-partners--is-open');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Obtén el elemento con ID "hero"
    const hero = document.getElementById('hero');

    // Obtén el elemento SVG con clase ".toggle-play"
    const togglePlay = document.querySelector('.toggle-play');

    // Agrega un event listener para el evento click en el elemento SVG
    if (togglePlay && hero) {
        togglePlay.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el evento se propague al elemento padre
            hero.classList.add('hero-video-active');
        });

        // Agrega un event listener para el evento click en el elemento "hero"
        hero.addEventListener('click', function() {
            hero.classList.remove('hero-video-active');
        });
    }
});
