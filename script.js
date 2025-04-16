const messageInput = document.querySelector('#messageInput');
const convertButton = document.querySelector('#convertButton');

// CONVERT TEXT TO SPEECH

function convertTextToSpeech(e) {
    e.preventDefault();

    if (messageInput.value.length > 0) {
        const text = new SpeechSynthesisUtterance(messageInput.value);
        speechSynthesis.speak(text);
    };
};

// INITIALIZING THE BUTTON
convertButton.addEventListener('click', convertTextToSpeech);