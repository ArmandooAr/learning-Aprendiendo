//lista de cartas
window.addEventListener('DOMContentLoaded', () => {
  const cartas = [
    "As_corazones.png", "As_corazones.png"
   /* "As_trebol.png", "As_trebol.png",
    "reydecorazones.png", "reydecorazones.png",
    "reynadetreboles.png", "reynadetreboles.png",
    "5depicas.jpg", "5depicas.jpg",
    "treesdetreboles.jpg", "treesdetreboles.jpg",
    "cuatrodepicas.jpg", "cuatrodepicas.jpg",
    "AZdediamantes.png", "AZdediamantes.png",
    "ochodepicas.jpg", "ochodepicas.jpg",
    "sietedepicas.jpg", "sietedepicas.jpg",
    "6dediamantes.jpg", "6dediamantes.jpg",
    "treesdediamantes.jpg", "treesdediamantes.jpg"*/
  ];


 // generar cartas
  const mesa = document.querySelector(".mesa");
  cartas.forEach(nombre => { 
    const div = document.createElement("div"); 
    div.className = "cartas";
    div.innerHTML = `
      <img src="imagenes/${nombre}" alt="${nombre}">
    `;
    mesa.appendChild(div);
  });
});