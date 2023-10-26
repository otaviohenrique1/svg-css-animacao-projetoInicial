import { Cards } from "./Cards";

window.onload = () => {
  let animaCards = new Cards();
  document.addEventListener("scroll", animaCards.scrollCards.bind(animaCards));
};

// window.onload => Qunado a janela for aberta