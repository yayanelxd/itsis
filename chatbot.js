// Obtén los elementos del DOM
const chatBtn = document.getElementById('chat-btn');
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');
const faqItems = document.querySelectorAll('.faq-item');
const clearChatBtn = document.getElementById('clear-chat-btn');


// Respuestas predeterminadas del chatbot
const responses = {
    "hola": "¡Hola! ¿Cómo puedo ayudarte?",
    "¿cómo estás?": "Estoy bien, gracias por preguntar. ¿Y tú?",
    "adiós": "¡Hasta luego! Que tengas un buen día.",
    "wwssadadba": "https://youtu.be/dQw4w9WgXcQ?si=GLjYtR-4han73yDD",
    "marco": "polo",
    "kano": "uwu",
    "miau": "?",
    "te amo": "rdido un perro xd",
    "¿qué programas brindan?": "placeholder", 
    "¿cuándo son las convocatorias?": "placeholder",
    "¿cuál es el cronograma?": "placeholder",
    "¿cómo inscribirse?": "placeholder",
    "¿qué necesito para poder inscribirme?": "placeholder"
};


// Función para mostrar el mensaje del usuario en el chat
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add(sender);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Desplazar al último mensaje
}


// Función para procesar el mensaje del usuario
function processMessage(message) {
    const response = responses[message.toLowerCase()] || "Lo siento, no entendí eso.";
    displayMessage(response, 'bot');
}


// Evento cuando el usuario presiona el botón de enviar
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        displayMessage(userMessage, 'user');
        processMessage(userMessage);
        userInput.value = ''; // Limpiar el campo de entrada
    }
});


// Permitir que el usuario presione "Enter" para enviar el mensaje
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});


// Función para alternar el chatbot (mostrar u ocultar)
function toggleChat() {
    const isVisible = chatContainer.style.display === 'block';
    chatContainer.style.display = isVisible ? 'none' : 'block';
}


// Evento para abrir o cerrar el chatbot al hacer clic en el botón
chatBtn.addEventListener('click', toggleChat);


// Cerrar el chatbot si se hace clic fuera de él
window.addEventListener('click', (e) => {
    if (!chatContainer.contains(e.target) && e.target !== chatBtn) {
        chatContainer.style.display = 'none';
    }
});


// Manejar el clic en las preguntas frecuentes
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const question = item.getAttribute('data-question');
        displayMessage(question, 'user'); // Mostrar la pregunta en el chat
        processMessage(question); // Responder con "placeholder"
        
        // Cerrar las preguntas frecuentes al hacer clic
        document.querySelector('.faq-section').style.display = 'none';
    });
});


// Limpiar todos los mensajes del chat
clearChatBtn.addEventListener('click', () => {
    chatBox.innerHTML = ''; // Limpiar el chat
    document.querySelector('.faq-section').style.display = 'block'; // Volver a mostrar las FAQ
});
