// import { Cards } from "./Cards";
// import { Icones } from "./Icones";

// window.onload => Qunado a janela for aberta
window.onload = () => {
  let animaCards = new Cards();
  document.addEventListener("scroll", animaCards.scrollCards.bind(animaCards));

  let icones = new Icones();
  icones.animaIcones();
};


class Cards {
  constructor() {
    this.posicaoSectionDicas = document.getElementById("section-dicas");
    this.cardEsq = document.querySelector(".card-esq");
    this.cardDir = document.querySelector(".card-dir");
  }

  scrollCards() {
    window.requestAnimationFrame(this.calculoScroll.bind(this));
  }

  calculoScroll() {
    const posicao = this.posicaoSectionDicas.getBoundingClientRect()["y"];
    // console.log(posicao);
    if (posicao <= 25) {
      // console.log("Chegou");
      this.cardEsq.style.transform = `translate(${((-posicao) + 25) / 10}%)`;
      this.cardDir.style.transform = `translate(${(posicao - 25) / 10}%)`;
    }
  }
}

class Icones {
  constructor() {
    this.listaIcones = document.querySelectorAll(".icone");
  }
  
  animaIcones() {
    // console.log(this.listaIcones);
    gsap.to(this.listaIcones, {
      rotation: 360,
      duration: 2
    });
  }
}
