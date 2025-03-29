let index = 0;
const gallery = document.getElementById("gallery");
const images = gallery.children;
const imageWidth = images[0].offsetWidth + 10;  // Ancho de la imagen con el borde
const totalImages = images.length;

let startTouchX = 0;
let endTouchX = 0;

// Detectar el deslizamiento
function handleTouchStart(e) {
    startTouchX = e.touches[0].clientX;  // Coordenada X inicial
}

function handleTouchMove(e) {
    endTouchX = e.touches[0].clientX;  // Coordenada X final mientras se desliza
}

function handleTouchEnd() {
    if (startTouchX > endTouchX) {
        moveSlide(1);  // Deslizar a la derecha
    } else if (startTouchX < endTouchX) {
        moveSlide(-1);  // Deslizar a la izquierda
    }
}

// Función de mover el slide (ya tienes esta funcionalidad)
function moveSlide(step) {
    index += step;
    if (index < 0) {
        index = totalImages - 1;
    } else if (index >= totalImages) {
        index = 0;
    }
    updateGallery();
}

// Actualizar la galería
function updateGallery() {
    const offset = -index * imageWidth;
    gallery.style.transform = `translateX(${offset}px)`;
}

// Agregar los eventos táctiles a la galería
gallery.addEventListener('touchstart', handleTouchStart);
gallery.addEventListener('touchmove', handleTouchMove);
gallery.addEventListener('touchend', handleTouchEnd);



// Función para mostrar/ocultar el menú
function toggleMenu(menuIndex) {
    const menus = document.querySelectorAll('.menuk');
    const currentMenu = document.getElementById(`menu${menuIndex}`);
    const toggleText = document.getElementById(`toggle-text-${menuIndex}`);
    const closeIcon = document.getElementById(`close-icon-${menuIndex}`);
    
    // Primero cerramos todos los menús y volvemos a poner "Ver más" y ocultar "X" en ellos
    menus.forEach((menu, index) => {
        if (index !== menuIndex) {
            menu.style.display = 'none';  // Cerrar menú
            document.getElementById(`toggle-text-${index}`).textContent = 'Ver más';  // Poner 'Ver más'
            document.getElementById(`close-icon-${index}`).style.display = 'none';  // Ocultar 'X'
        }
    });

    // Verificar si el menú está visible
    if (currentMenu.style.display === 'flex') {
        // Si el menú está visible, lo cerramos
        currentMenu.style.display = 'none';
        toggleText.textContent = 'Ver más'; // Cambiar el texto a 'Ver más'
        closeIcon.style.display = 'none'; // Ocultar la 'X'
    } else {
        // Si el menú no está visible, lo mostramos
        currentMenu.style.display = 'flex';
        toggleText.textContent = 'Cerrar'; // Cambiar el texto a 'Cerrar'
        closeIcon.style.display = 'inline'; // Mostrar la 'X'
    }
}


// Selecciona todos los títulos h3 dentro de la clase "Preguntas"
const preguntas = document.querySelectorAll('.Preguntas-texto');

// Agrega un event listener a cada h3 para alternar la visibilidad del menú
preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', function() {
        // Busca el menú correspondiente dentro de la misma pregunta
        const menu = this.nextElementSibling;

        // Verifica si el menú ya está abierto
        if (menu.classList.contains('open')) {
            // Si está abierto, lo cierra
            menu.classList.remove('open');
        } else {
            // Si no está abierto, lo abre
            // Primero cierra todos los demás menús abiertos
            document.querySelectorAll('.menu-respuestas.open').forEach(openMenu => {
                openMenu.classList.remove('open');
            });
            // Abre el menú correspondiente
            menu.classList.add('open');
        }
    });
});





// Mostrar el botón de "Volver al Header" cuando el usuario se desplace
window.onscroll = function() {
    var button = document.getElementById("backToHeader");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Función para regresar al header al hacer clic en el botón
document.getElementById("backToHeader").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};








// Función para hacer scroll a las secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // Ajusta el desplazamiento si es necesario
        behavior: 'smooth'
    });
}

// Función para detectar la sección visible y resaltar el botón correspondiente
function highlightActiveButton() {
    const sections = document.querySelectorAll('section');
    const buttons = document.querySelectorAll('.menu23 button');

    let currentSection = null;

    // Detecta cuál sección está visible
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
        }
    });

    // Si una sección está visible, activa el botón correspondiente
    buttons.forEach((button) => {
        const sectionId = button.getAttribute('onclick').match(/'([^']+)'/)[1]; // Obtiene el id desde el atributo onclick
        if (currentSection && currentSection.id === sectionId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Llama a la función al hacer scroll para detectar qué sección está visible
window.addEventListener('scroll', highlightActiveButton);




