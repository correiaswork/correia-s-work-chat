document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('image-input').addEventListener('change', uploadImage);

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messagesContainer = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messagesContainer.appendChild(messageElement);
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function uploadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const messagesContainer = document.getElementById('messages');
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.style.maxWidth = '100%';
            imgElement.style.marginTop = '10px';
            const link = document.createElement('a');
            link.href = `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(e.target.result)}`;
            link.target = '_blank';
            link.appendChild(imgElement);
            messagesContainer.appendChild(link);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        };
        reader.readAsDataURL(file);
    }
}
