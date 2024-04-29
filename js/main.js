// Obtendo a referência do elemento HTML com o id "changingText"
const changingText = document.getElementById("changingText");

// Obtendo a lista de frases do atributo data-phrases do elemento e dividindo em um array
const phrases = changingText.getAttribute("data-phrases").split(", ");

// Inicializando variáveis de controle
let phraseIndex = 0; // Índice da frase atual
let letterIndex = 0; // Índice da letra atual na frase atual
let eraseTimer; // Timer para a função de apagar texto
let writeTimer; // Timer para a função de escrever texto
let currentText = ""; // Texto atual exibido no elemento

// Função para mostrar a próxima letra da frase atual
function showNextLetter() {
  // Adiciona a próxima letra da frase atual ao texto atual
  currentText += phrases[phraseIndex][letterIndex];

  // Define o texto atual no elemento
  changingText.textContent = currentText;

  // Incrementa o índice da letra
  letterIndex++;

  // Se ainda houver letras na frase atual
  if (letterIndex < phrases[phraseIndex].length) {
    // Configura um temporizador para chamar a função novamente após 100ms
    writeTimer = setTimeout(showNextLetter, 100);
  } else {
    // Se a frase atual estiver completa, configura um temporizador para apagar o texto após 1 segundo
    eraseTimer = setTimeout(eraseText, 1000);
  }
}

// Função para apagar o texto
function eraseText() {
  // Remove a última letra do texto atual
  currentText = currentText.slice(0, -1);

  // Define o texto atual no elemento
  changingText.textContent = currentText;

  // Se o texto atual estiver vazio (após apagar toda a frase)
  if (currentText === "") {
    // Avança para a próxima frase
    phraseIndex = (phraseIndex + 1) % phrases.length;
    
    // Reseta o índice da letra e define um espaço em branco como texto atual
    letterIndex = 0;
    currentText = " ";
    
    // Configura um temporizador para começar a escrever a próxima frase após 500ms
    writeTimer = setTimeout(showNextLetter, 500);
  } else {
    // Se ainda houver letras no texto atual, configura um temporizador para apagar a próxima letra após 100ms
    eraseTimer = setTimeout(eraseText, 100);
  }
}

// Função para iniciar a animação do texto
function startTextAnimation() {
  // Configura um temporizador para começar a escrever a primeira frase após 100ms
  writeTimer = setTimeout(showNextLetter, 100);
}

// Inicia a animação do texto
startTextAnimation();
