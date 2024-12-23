const starsContainer = document.getElementById('stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    starsContainer.appendChild(star);

    const size = Math.random() * 3 + 1;  // Tamaño de las estrellas (más grandes)
    const positionX = Math.random() * window.innerWidth;
    const positionY = Math.random() * window.innerHeight;
    const duration = Math.random() * 5 + 5; // Duración aleatoria más larga para un movimiento fluido

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${positionY}px`;
    star.style.left = `${positionX}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;  // Desfase en la animación
}

// Crear más estrellas para asegurar un fondo completo
for (let i = 0; i < 150; i++) {  // Aumentar el número de estrellas
    createStar();
}

// Hacer que las estrellas continúen apareciendo para crear el efecto de movimiento fluido
setInterval(() => {
    createStar();
}, 100);
