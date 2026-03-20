// Actualizar Hora Real
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

// Ejecutar reloj cada segundo
setInterval(updateClock, 1000);
updateClock();

// Manejar apertura de aplicaciones
function openApp(name) {
    // Vibración corta si el dispositivo lo permite
    if (navigator.vibrate) {
        navigator.vibrate(40);
    }
    
    console.log("Abriendo app: " + name);
    
    // Aquí puedes disparar eventos del juego
    if (name === 'SQL Inject') {
        alert("¡Peligro! Intentando inyectar base de datos...");
    }
}

// Botón de encendido (Filtro de pantalla)
const powerBtn = document.getElementById('powerBtn');
const screen = document.getElementById('screen');
let screenOn = true;

powerBtn.addEventListener('click', () => {
    screenOn = !screenOn;
    screen.style.transition = "filter 0.3s ease, opacity 0.3s ease";
    screen.style.opacity = screenOn ? "1" : "0";
    screen.style.filter = screenOn ? "brightness(1)" : "brightness(0)";
});