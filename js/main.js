const changingText = document.getElementById("changingText");
const phrases = [

  "Software Engineer Student",
  "Computer Technician",
  "Full Stack Developer",
];
let phraseIndex = 0;
let letterIndex = 0;
let eraseTimer;
let writeTimer;

function showNextLetter() {
    changingText.textContent += phrases[phraseIndex][letterIndex];
    letterIndex++;
    if (letterIndex < phrases[phraseIndex].length) {
        writeTimer = setTimeout(showNextLetter, 100); // Ajuste o tempo entre cada letra conforme desejado
    } else {
        eraseTimer = setTimeout(eraseText, 1000); // Tempo de espera após escrever toda a frase
    }
}

function eraseText() {
    changingText.textContent = changingText.textContent.slice(0, -1);
    if (changingText.textContent === "") {
        // Adiciona o primeiro caractere da próxima frase somente quando o texto estiver completamente apagado
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        changingText.textContent = ""; // Limpa completamente o texto antes de adicionar o primeiro caractere da próxima frase
        writeTimer = setTimeout(showNextLetter, 500); // Tempo de espera antes de começar a escrever a próxima frase
    } else {
        eraseTimer = setTimeout(eraseText, 100); // Ajuste o tempo entre cada letra apagada conforme desejado
    }
}

function startTextAnimation() {
    writeTimer = setTimeout(showNextLetter, 100); // Tempo de espera antes de começar a escrever a primeira frase
}

// Inicie a animação
startTextAnimation();
