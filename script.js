const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseText = document.getElementById("responseText");
const bearImage = document.getElementById("bear-image");

let size = 16; // Tamaño inicial del botón "Sí"
let clickCount = 0; // Contador de clics en el botón "No"

// Mensajes que irán cambiando en el botón "No"
const messages = [
    "Oh no! ¿Estás seguro?",
    "¿Seguro, seguro?",
    "¿De verdad quieres decir no?",
    "Piénsalo bien...",
    "Estás rompiendo mi corazón 💔",
    "Última oportunidad 😢",
    "Ya no puedes decir que no..."
];

noBtn.addEventListener("click", () => {
    size += 10; // Aumenta el tamaño del botón "Sí"
    yesBtn.style.fontSize = size + "px";

    // Cambia el texto del botón "No"
    if (clickCount < messages.length) {
        noBtn.textContent = messages[clickCount];
    } else {
        noBtn.textContent = "Ya no puedes decir que no...";
    }
    
    clickCount++;
});

yesBtn.addEventListener("click", () => {
    // Oculta los botones y cambia la imagen y texto
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    responseText.classList.remove("hidden");
    bearImage.src = "oso-feliz.gif"; // Cambia la imagen a osito feliz
});
