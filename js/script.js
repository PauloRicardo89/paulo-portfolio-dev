// Inicialização da biblioteca AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
  // Inicializa animações AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // Navegação suave ao clicar em links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Evita comportamento padrão
      e.preventDefault();

      // Scroll suave até o elemento
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Menu hamburguer mobile
  const mobileMenu = document.querySelector("#mobile-menu");
  const navMenu = document.querySelector("#menu");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Botão voltar ao topo
  const btnTopo = document.querySelector("#btnTopo");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      btnTopo.style.display = "flex";
    } else {
      btnTopo.style.display = "none";
    }
  });

  if (btnTopo) {
    btnTopo.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Alternância de tema (claro/escuro)
  const themeToggle = document.querySelector("#theme-toggle");
  const themeIcon = themeToggle.querySelector("i");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");

      if (document.body.classList.contains("dark-theme")) {
        themeIcon.className = "fas fa-sun";
        localStorage.setItem("theme", "dark");
      } else {
        themeIcon.className = "fas fa-moon";
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Verificar tema salvo
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.className = "fas fa-sun";
  }

  // Formulário de contato
  const formContato = document.querySelector("#formContato");

  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();

      // Aqui você pode adicionar uma funcionalidade real de envio de email
      // usando um serviço como EmailJS, Formspree, etc.
      alert("Obrigado pelo contato! Em breve retornarei sua mensagem.");
      formContato.reset();
    });
  }

  // Navegação fixa - mudança de estilo ao rolar
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Função para visualizar imagens em tela cheia
  const projetoImagens = document.querySelectorAll(".projeto-imagens a");
  const body = document.body;

  projetoImagens.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const imgSrc = this.querySelector("img").getAttribute("src");
      const imgAlt = this.querySelector("img").getAttribute("alt");

      // Criar o lightbox
      const lightbox = document.createElement("div");
      lightbox.classList.add("lightbox");

      // Criar a imagem dentro do lightbox
      const img = document.createElement("img");
      img.setAttribute("src", imgSrc);
      img.setAttribute("alt", imgAlt);

      // Criar o botão de fechar
      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "&times;";
      closeBtn.classList.add("lightbox-close");

      // Adicionar elementos ao lightbox
      lightbox.appendChild(img);
      lightbox.appendChild(closeBtn);

      // Adicionar lightbox ao body
      body.appendChild(lightbox);

      // Impedir rolagem do body quando lightbox está aberto
      body.style.overflow = "hidden";

      // Função para fechar o lightbox
      const closeLightbox = function () {
        body.removeChild(lightbox);
        body.style.overflow = "auto";
      };

      // Adicionar evento ao botão de fechar
      closeBtn.addEventListener("click", closeLightbox);

      // Fechar lightbox ao clicar fora da imagem
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });

      // Fechar lightbox ao pressionar ESC
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeLightbox();
        }
      });
    });
  });
});
