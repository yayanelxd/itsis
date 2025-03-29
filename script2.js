// Función para mover un carrusel específico
function moveCarousel(carouselId) {
    let carouselItems = document.querySelector(`#${carouselId}`);
    let items = Array.from(carouselItems.children);
    let totalItems = items.length;
  
    // Duplicamos los elementos para crear un efecto circular
    items.forEach(item => {
      let clone = item.cloneNode(true); // Clonamos el ítem
      carouselItems.appendChild(clone); // Lo agregamos al final del carrusel
    });
  
    // Recalculamos el total de elementos (original + duplicados)
    totalItems = items.length * 2;
  
    let currentIndex = 0;
  
    function move() {
      currentIndex++;
      if (currentIndex >= totalItems / 2) {
        // Cuando llegue al final de la parte original, volvemos al inicio
        carouselItems.style.transition = 'none'; // Desactivamos la transición para el "rebote"
        carouselItems.style.transform = `translateX(0px)`; // Lo devolvemos al inicio
  
        // Forzamos la transición después de un pequeño retraso
        setTimeout(() => {
          carouselItems.style.transition = 'transform 1s ease-in-out'; // Activamos la transición nuevamente
          currentIndex = 0; // Reiniciamos el índice
        }, 50);
      }
  
      // Mueve el carrusel
      carouselItems.style.transform = `translateX(-${currentIndex * 300}px)`;
    }
  
    setInterval(move, 2000); // Mueve el carrusel cada 2 segundos
  }
  
  // Iniciar ambos carruseles
  moveCarousel('carousel-1');
  moveCarousel('carousel-2');