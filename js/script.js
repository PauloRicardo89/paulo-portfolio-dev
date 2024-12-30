function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
 }


document.addEventListener('DOMContentLoaded', () => {
  const closeLinks = document.querySelectorAll('.close');
  
  closeLinks.forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      
      // Força o modal a ficar em display none
      const modal = link.closest('.modal');
      modal.style.display = 'none';
      
      // Remove o hash da URL sem rolar para o topo
      history.pushState("", document.title, window.location.pathname + window.location.search);
    });
  });
});