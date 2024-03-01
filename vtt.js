// click_to_record.addEventListener('click',function(){
//     var speech = true;
//     window.SpeechRecognition = window.webkitSpeechRecognition;

//     const recognition = new SpeechRecognition();
//     recognition.interimResults = true;

//     recognition.addEventListener('result', e => {
//         const transcript = Array.from(e.results)
//             .map(result => result[0])
//             .map(result => result.transcript)
//             .join('')

//         document.getElementById("convert_text").innerHTML = transcript;
//         console.log(transcript);
//     });
    
//     if (speech == true) {
//         recognition.start();
//     }
// })

// const startButton = document.getElementById('click_to_record');
// const outputDiv = document.getElementById('convert_text');

// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
// recognition.lang = 'en-US';

// recognition.onstart = () => {
//   startButton.textContent = 'Listening...';
// };

// recognition.onresult = (event) => {
//   const transcript = event.results[0][0].transcript;
//   outputDiv.textContent = transcript;
// };

// recognition.onend = () => {
//   startButton.textContent = 'Start Voice Input';
// };

// startButton.addEventListener('click', () => {
//   recognition.start();
// });

// const startButton = document.getElementById('click_to_record');
//  const outputDiv = document.getElementById('convert_text');
//  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
//  recognition.lang = 'en-US';
//  recognition.onstart = () => {
//  startButton.textContent = 'Listening...';
//  };
//  recognition.onresult = (event) => {
//  const transcript = event.results[0][0].transcript;
//  outputDiv.textContent = transcript;
//  };
//  recognition.onend = () => {
//  startButton.textContent = 'Start Voice Input';
//  };
//  startButton.addEventListener('click', () => {
//  recognition.start();
//  });


// document.getElementById('click_to_record').addEventListener('click', function() {
//     var speech = true;
//     if (speech) {
//         var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//         recognition.interimResults = true;
//         recognition.lang = 'en-US';

//         recognition.onresult = function(event) {
//             var transcript = Array.from(event.results)
//                 .map(result => result[0])
//                 .map(result => result.transcript)
//                 .join('');

//             document.getElementById("convert_text").value = transcript;
//             console.log(transcript);
//         };

//         recognition.onerror = function(event) {
//             console.error('Speech recognition error:', event.error);
//         };
        

//         recognition.start();
//     }
// });

document.getElementById('click_to_record').addEventListener('click', function() {
    var speech = true;
    var button = document.getElementById('click_to_record');
    if (speech) {
        button.textContent = "Listening...";
        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.interimResults = true;
        recognition.lang = 'en-US'; // Set the language to English, change if needed

        recognition.onresult = function(event) {
            var transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            document.getElementById("convert_text").value = transcript;
            console.log(transcript);
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
        };

        recognition.onend = function() {
            button.textContent = "Voice To Text";
        };

        recognition.start();
    }
});