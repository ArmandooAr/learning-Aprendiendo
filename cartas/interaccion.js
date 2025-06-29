window.addEventListener('DOMContentLoaded', () => {
  const mesa = document.querySelector('.mesa');
  const cartas = Array.from(mesa.children);

  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }

  while (mesa.firstChild) {
    mesa.removeChild(mesa.firstChild);
  }

  cartas.forEach(carta => mesa.appendChild(carta));
});