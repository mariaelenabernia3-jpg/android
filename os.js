// Actualizar el reloj cada minuto
function updateClock() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" + 
                 now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

// Manejar apertura de aplicaciones
function runApp(name) {
    console.log(`Iniciando app: ${name}`);
    
    // Ejemplo de interactividad hacker
    if(name === 'Terminal') {
        const terminal = confirm("¿Deseas conectar al servidor remoto?");
        if(terminal) alert("Conexión establecida. IP: 192.168.1.105");
    } else {
        alert("La aplicación " + name + " requiere permisos de ROOT.");
    }
}

// Botón de encendido (solo estético para PC)
document.getElementById('powerBtn').addEventListener('click', () => {
    const screen = document.getElementById('screen');
    screen.style.transition = "opacity 0.3s";
    screen.style.opacity = screen.style.opacity === "0" ? "1" : "0";
});