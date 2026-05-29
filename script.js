
// Animação suave ao rolar a página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Efeito de digitação no título (opcional)
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Ativar quando carregar a página
window.onload = () => {
  console.log('%cAgro Paraná - Site carregado com sucesso!', 'color: #2e7d32; font-weight: bold;');
};
