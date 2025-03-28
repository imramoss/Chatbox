// Função para criar uma nova mensagem no chat
function addMessageToChat(content, sender) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add(sender + '-msg');
    const msgSpan = document.createElement('span');
    msgSpan.textContent = content;
    msgDiv.appendChild(msgSpan);
    chatBox.appendChild(msgDiv);

    // Rolar para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para processar a mensagem do usuário
function processUserInput() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Adicionar mensagem do usuário ao chat
    addMessageToChat(userInput, 'user');

    // Limpar campo de entrada
    document.getElementById('user-input').value = '';

    // Simular uma resposta do bot
    setTimeout(() => {
        const botResponse = generateBotResponse(userInput);
        addMessageToChat(botResponse, 'bot');
    }, 1000);
}

// Função para gerar uma resposta simples do bot
function generateBotResponse(input) {
    // Respostas pré-definidas
    const responses = {
        'olá': 'Olá! Como posso te ajudar?',
        'como vai?': 'Estou bem, obrigado! E você?',
        'tchau': 'Tchau! Volte sempre!',
    };

    // Resposta baseada na entrada do usuário
    return responses[input.toLowerCase()] || 'Desculpe, não entendi isso.';
}

// Evento para enviar mensagem ao clicar no botão
document.getElementById('send-btn').addEventListener('click', processUserInput);

// Evento para enviar mensagem ao pressionar Enter
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processUserInput();
    }
});
