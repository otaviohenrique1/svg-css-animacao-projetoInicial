import { Cards } from "./Cards";

window.onload = () => {
  let animaCards = new Cards();
  document.addEventListener("scroll", animaCards.calculoScroll);
};

// window.onload => Qunado a janela for aberta