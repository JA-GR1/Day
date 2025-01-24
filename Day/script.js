const targetDate = new Date('2025-01-24T23:43:00'); // Fecha del cumpleaños

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (difference <= 0) {
        clearInterval(interval);
        document.querySelector('h1').textContent = '¡Feliz Cumpleaños! 🎉';
        document.getElementById('countdown').style.display = 'none';
    }
}

function unlockCards() {
    const cards = document.querySelectorAll('.card');
    const now = new Date();

    cards.forEach(card => {
        const unlockDate = new Date(card.getAttribute('data-unlock-date'));

        if (now >= unlockDate) {
            card.classList.add('show'); // Desbloquear y mostrar
            card.classList.remove('locked');
            card.querySelector('.unlock-info').style.display = 'none'; // Ocultar la fecha
        } else {
            card.classList.add('locked'); // Mantener bloqueada
            card.classList.remove('show');
            const unlockInfo = card.querySelector('.unlock-info');
            unlockInfo.style.display = 'block'; // Mostrar la fecha de desbloqueo
            unlockInfo.textContent = `Desbloqueo: ${unlockDate.toLocaleString()}`; // Muestra la fecha
        }
    });
}




function createParticles() {
    const background = document.getElementById('background');
    for (let i = 0; i < 35; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        if (Math.random() > 0.5) { // Aumentamos la probabilidad al 50%
            particle.classList.add('glow');
        }

        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.bottom = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = Math.random() * 5 + 3 + 's';
        background.appendChild(particle);
    }
}

const interval = setInterval(updateCountdown, 1000);
createParticles();
unlockCards(); // Llamamos para desbloquear las tarjetas según la fecha
