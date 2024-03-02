const convertedText = document.getElementById('converted_text');
const startButton = document.getElementById('click_to_record');
const submitButton = document.getElementById('submit_text');
const imageContainer = document.getElementById('image_container');
const imageDisplay = document.getElementById('image_display');
let recognition;
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
} else if ('SpeechRecognition' in window) {
    recognition = new SpeechRecognition();
} else {
    console.log("Speech recognition not supported in this browser.");
    
}
let isRecording = false;

function startRecording() {
    isRecording = !isRecording;
    const button = document.getElementById("click_to_record");
    if (isRecording) {
        button.classList.add("recording");
        // Code to start recording
    } else {
        button.classList.remove("recording");
        // Code to stop recording
    }
}

let lastTranscript = ''; 
startButton.addEventListener('click', () => {
    recognition.start(); 
    startButton.textContent = 'Recording...';
});

recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1];
    const transcript = result[0].transcript;
    convertedText.value += transcript;
    lastTranscript = transcript; 
};

recognition.onend = () => {
    startButton.textContent = 'Start Recording';
};

recognition.onerror = (event) => {
    console.error('Speech recognition error detected: ' + event.error);
};

submitButton.addEventListener('click', () => { 
    handleTranscript(lastTranscript); 
    convertedText.value = '';
});
startButton.addEventListener('click', () => { 
    convertedText.value = '';
});



function handleTranscript(transcript) {
    let letter = transcript.trim().toUpperCase();
    let imagePath = letter + ".mp4"; 
    console.log("Image Path:", imagePath); 
    imageDisplay.src = imagePath;
    imageDisplay.alt = 'my image';
    imageDisplay.width = 200;
    imageDisplay.height = 400; 

    imageContainer.style.display = 'block'; 
}