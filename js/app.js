/**
 * Main application initialization
 */

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
  // Start with the first question
  renderQuestion(0);
  
  // Initialize pages navigation
  initializePages();
  
  // Setup withdraw button in header
  const headerWithdrawBtn = document.getElementById('header-withdraw-btn');
  if (headerWithdrawBtn) {
    // Adicionar classe disabled para estilo visual
    headerWithdrawBtn.classList.add('disabled');
    
    // Adicionar event listener para mostrar alerta quando clicado
    headerWithdrawBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      alert('You need to complete all tasks before you can withdraw your money.');
    });
  }
});