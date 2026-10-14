/**
 * Quiz questions and logic
 */

// Quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "Como avaliaria a sua experiência geral no Facebook?",
    options: [
      { emoji: "😍", text: "Excelente" },
      { emoji: "😊", text: "Boa" },
      { emoji: "😐", text: "Mediana" },
      { emoji: "😒", text: "Má" }
    ]
  },
  {
    id: 2,
    question: "Qual é o seu formato de vídeo favorito no Facebook?",
    options: [
      { emoji: "🎥", text: "Vídeos curtos" },
      { emoji: "📹", text: "Vídeos de duração média" },
      { emoji: "⏳", text: "Vídeos longos" },
      { emoji: "📺", text: "Diretos" }
    ]
  },
  {
    id: 3,
    question: "Como descobre novos vídeos no Facebook?",
    options: [
      { emoji: "🎯", text: "Feed «Para si»" },
      { emoji: "👤", text: "Através dos criadores que sigo" },
      { emoji: "🔍", text: "Através de hashtags" },
      { emoji: "📜", text: "Feed «A seguir»" },
      { emoji: "💡", text: "Recomendações" }
    ]
  },
  {
    id: 4,
    question: "Quantas horas por dia passa no Facebook?",
    options: [
      { emoji: "⏳", text: "Menos de 1 hora" },
      { emoji: "⏳", text: "1 a 2 horas" },
      { emoji: "⏳", text: "2 a 4 horas" },
      { emoji: "⏳", text: "4 a 6 horas" },
      { emoji: "⏳", text: "Mais de 6 horas" }
    ]
  },
  {
    id: 5,
    question: "O que o leva a seguir um criador no Facebook?",
    options: [
      { emoji: "🎉", text: "Conteúdo divertido" },
      { emoji: "📚", text: "Conteúdo educativo" },
      { emoji: "🤝", text: "Ligação pessoal" },
      { emoji: "🔥", text: "Participação em desafios" },
      { emoji: "📅", text: "Frequência das publicações" }
    ]
  },
  {
    id: 6,
    question: "Quais destes temas de conteúdo mais gosta de ver no Facebook?",
    options: [
      { emoji: "😂", text: "Comédia" },
      { emoji: "💃", text: "Dança" },
      { emoji: "ℹ️", text: "Tutoriais e dicas" },
      { emoji: "📹", text: "Vlogs do dia a dia" },
      { emoji: "💄", text: "Moda e beleza" }
    ]
  },
  {
    id: 7,
    question: "Em que altura do dia utiliza mais o Facebook?",
    options: [
      { emoji: "🌅", text: "De manhã" },
      { emoji: "🌞", text: "À tarde" },
      { emoji: "🌜", text: "Ao início da noite" },
      { emoji: "🌙", text: "Tarde da noite" }
    ]
  },
  {
    id: 8,
    question: "A que secção do Facebook acede com mais frequência?",
    options: [
      { emoji: "🎯", text: "Para si" },
      { emoji: "👥", text: "A seguir" },
      { emoji: "📺", text: "Facebook Live" },
      { emoji: "🔍", text: "Descobrir" },
      { emoji: "➕", text: "Outra" }
    ]
  },
  {
    id: 9,
    question: "Com que frequência comenta vídeos no Facebook?",
    options: [
      { emoji: "🔄", text: "Sempre" },
      { emoji: "📆", text: "Frequentemente" },
      { emoji: "⏳", text: "Às vezes" },
      { emoji: "🌧️", text: "Raramente" },
      { emoji: "🚫", text: "Nunca" }
    ]
  },
  {
    id: 10,
    question: "Que tipo de interação realiza mais nos vídeos do Facebook?",
    options: [
      { emoji: "👍", text: "Gosto" },
      { emoji: "💬", text: "Comentar" },
      { emoji: "🔄", text: "Partilhar" },
      { emoji: "📌", text: "Guardar" },
      { emoji: "🚫", text: "Nenhuma" }
    ]
  },
  {
    id: 11,
    question: "Em que faixa etária se encontra?",
    options: [
      { emoji: "🧑‍🎓", text: "13–17 anos" },
      { emoji: "🎉", text: "18–24 anos" },
      { emoji: "👩‍💼", text: "25–34 anos" },
      { emoji: "👵", text: "35 anos ou mais" }
    ]
  }
];

// Quiz state
let currentQuestionIndex = 0;
let selectedOption = null;
const quizContainer = document.getElementById('quiz-container');

// Render a question
function renderQuestion(questionIndex) {
  const question = quizQuestions[questionIndex];
  
  // Update progress
  updateProgressBar(questionIndex, quizQuestions.length);
  
  // Create the question HTML
  const questionHTML = `
    <div class="quiz-title">${question.question}</div>
    <div class="quiz-subtitle">Selecione uma opção antes de continuar:</div>
    <div class="options-container">
      ${question.options.map((option, index) => `
        <div class="option" data-index="${index}">
          <div class="option-content">
            <div class="option-emoji">${option.emoji}</div>
            <div class="option-text">${option.text}</div>
          </div>
          <div class="custom-checkbox"></div>
        </div>
      `).join('')}
    </div>
    <button id="continue-btn" class="continue-btn" disabled>Continue</button>
    <div class="bonus-text">Complete para um bônus adicional</div>
    <div class="divider"></div>
  `;
  
  // Set the HTML
  quizContainer.innerHTML = questionHTML;
  
  // Add event listeners to options
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      // Remove selection from all options
      options.forEach(opt => opt.classList.remove('selected'));
      
      // Select this option
      option.classList.add('selected');
      
      // Enable the continue button
      document.getElementById('continue-btn').disabled = false;
      
      // Store the selected option
      selectedOption = parseInt(option.dataset.index);
      
      // Rastrear interação (Contact event)
      if (typeof trackContact === 'function') {
        trackContact();
      }
    });
  });
  
  // Add event listener to continue button
  document.getElementById('continue-btn').addEventListener('click', () => {
    if (selectedOption !== null) {
      // Notificar resposta da pergunta
      const selectedAnswer = question.options[selectedOption].text;
      if (typeof notifyQuestionAnswered === 'function') {
        notifyQuestionAnswered(questionIndex + 1, selectedAnswer);
      }
      
      // Show reward
      showReward(currentQuestionIndex);
    }
  });
  
  // Animate the new question in
  animateElement(quizContainer, 'fade-in');
}

// Move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  selectedOption = null;
  
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion(currentQuestionIndex);
  } else {
    // Show final reward
    showFinalReward();
  }
}

// Reset the quiz
function resetQuiz() {
  currentQuestionIndex = 0;
  selectedOption = null;
  totalEarned = 0;
  rewards = generateRewards();
  currentBalance.textContent = "0";
  renderQuestion(currentQuestionIndex);
}