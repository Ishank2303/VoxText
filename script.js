let speech = new SpeechSynthesisUtterance();

let voices = [];

let voicesSelect = document.querySelector("select");
let speakButton = document.querySelector("button");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voicesSelect.options[i] = new Option(voice.name, i)));
};

voicesSelect.addEventListener("change", () => {
    speech.voice = voices[voicesSelect.value];
});

speakButton.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);

    // Disable the button to prevent multiple clicks
    speakButton.disabled = true;

    // Event listener to re-enable the button after speech ends
    speech.onend = () => {
        speakButton.disabled = false;
        console.log("Finished speaking.");
    };

    // Handle any errors during speaking
    speech.onerror = (event) => {
        console.error("SpeechSynthesisUtterance.onerror", event);
        speakButton.disabled = false;
    };
});


















// let speech = new SpeechSynthesisUtterance();

// let voices = [];

// let voicesSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = ()=>{
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];

//     voices.forEach((voice,i) => (voicesSelect.options[i] = new Option(voice.name,i)));
// };

// voicesSelect.addEventListener("change" , ()=>{
//     speech.voice = voices[voicesSelect.value];
// });


// document.querySelector("button").addEventListener("click", ()=>{
//     speech.text = document.querySelector("textarea").value;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     window.speechSynthesis.speak(speech);
// });