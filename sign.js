const convertedText = document.getElementById('converted_text');
const startButton = document.getElementById('click_to_record');
const submitButton = document.getElementById('submit_text');
const videoDisplay = document.getElementById('video_display');
const videoContainer = document.getElementById('video_container'); // Define videoContainer
let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
} else if ('SpeechRecognition' in window) {
    recognition = new SpeechRecognition();
} else {
    console.log("Speech recognition not supported in this browser.");
}

let isRecording = false;

function toggleRecording() {
    isRecording = !isRecording;
    const button = document.getElementById("click_to_record");
    if (isRecording) {
        button.classList.add("recording");
        recognition.start();
    } else {
        button.classList.remove("recording");
        recognition.stop();
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
    videoContainer.style.display = 'block'; // Change display to "block"
});
startButton.addEventListener('click', () => {
    convertedText.value = '';
});

function handleTranscript(transcript) {
    let letter = transcript.trim().toUpperCase();
    let videoPath = letter + ".mp4";
    console.log("Video Path:", videoPath);
    // Pause the video before changing the source
    videoDisplay.pause();
    videoDisplay.src = videoPath;
    videoDisplay.alt = 'my video';
    videoDisplay.width = 200;
    videoDisplay.height = 400;
    // Reset the video to start from the beginning
    videoDisplay.currentTime = 0;
    // Start playing the video
    videoDisplay.play();
}
