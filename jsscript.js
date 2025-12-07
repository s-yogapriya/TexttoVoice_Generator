document.addEventListener("DOMContentLoaded", () => { 
    //DOMContentLoaded is used to ensure the script runs after the HTML is fully loaded. 
    const input = document.getElementById('text');
    const button = document.getElementById('button');
    input.addEventListener('input', () => {
        button.style.background = 'rgb(102, 179, 199)';
    });
});

function speak() {
    const input = document.getElementById('text').value;
        if (!input.trim()) {
            alert("Please enter text!");
            return;
        }
    const utterance = new SpeechSynthesisUtterance(input);
    speechSynthesis.speak(utterance);}