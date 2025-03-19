const background = document.querySelector('.background');
let positionX = 0; // Posição horizontal inicial
let positionY = 0; // Posição vertical inicial
let mouseX = 0; // Posição horizontal do mouse
let mouseY = 0; // Posição vertical do mouse
const speed = 0.2; // Velocidade do parallax
const scrollSpeedX = 0.2; // Velocidade horizontal do movimento contínuo
const scrollSpeedY = 0.2; // Velocidade vertical do movimento contínuo

// Atualiza as posições com base no movimento do mouse
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calcula a porcentagem da posição do mouse
    mouseX = (clientX / windowWidth - 0.5) * 100; // De -50 a +50
    mouseY = (clientY / windowHeight - 0.5) * 100; // De -50 a +50
});

// Animação do plano de fundo
function animateBackground() {
    // Atualiza posições automáticas
    positionX += scrollSpeedX; // Movimento contínuo horizontal
    positionY += scrollSpeedY; // Movimento contínuo vertical

    // Aplica o efeito parallax com base na posição do mouse
    const parallaxX = positionX + mouseX * speed;
    const parallaxY = positionY + mouseY * speed;

    // Define a posição do background
    background.style.backgroundPosition = `${parallaxX}px ${parallaxY}px`;

    requestAnimationFrame(animateBackground); // Repetição da animação
}

animateBackground();