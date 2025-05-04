// Inicialização da biblioteca AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa animações AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Navegação suave ao clicar em links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Evita comportamento padrão
      e.preventDefault();
      
      // Scroll suave até o elemento
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Menu hamburguer mobile
  const mobileMenu = document.querySelector('#mobile-menu');
  const navMenu = document.querySelector('#menu');
  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Botão voltar ao topo
  const btnTopo = document.querySelector('#btnTopo');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      btnTopo.style.display = 'flex';
    } else {
      btnTopo.style.display = 'none';
    }
  });
  
  if (btnTopo) {
    btnTopo.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Alternância de tema (claro/escuro)
  const themeToggle = document.querySelector('#theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      
      if (document.body.classList.contains('dark-theme')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
      }
    });
  }
  
  // Verificar tema salvo
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.className = 'fas fa-sun';
  }
  
  // Formulário de contato
  const formContato = document.querySelector('#formContato');
  
  if (formContato) {
    formContato.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aqui você pode adicionar uma funcionalidade real de envio de email
      // usando um serviço como EmailJS, Formspree, etc.
      alert('Obrigado pelo contato! Em breve retornarei sua mensagem.');
      formContato.reset();
    });
  }
  
  // Navegação fixa - mudança de estilo ao rolar
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});