// import { Cards } from "./Cards";
// import { Icones } from "./Icones";
// import { Footer } from "./Footer";

// window.onload => Qunado a janela for aberta
window.onload = () => {
  const animaCards = new Cards();
  document.addEventListener("scroll", animaCards.scrollCards.bind(animaCards));

  const icones = new Icones();
  icones.animaIcones();
  
  const footer = new Footer();
  footer.efeitoOnda();
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
    const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
    if (posicao >= 25) {
        this.cardEsq.style.transform = `translate(${((-posicao) + 25)/10}%)`;
        this.cardDir.style.transform = `translate(${(posicao - 25)/10}%)`;
    }
  }
}

class Icones {
  constructor() {
    this.listaIcones = document.querySelectorAll(".icone");
  }
  
  animaIcones() {
    gsap.to(this.listaIcones, {
      scale: 0.95,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
  }
}

class Footer {
  constructor() {
    this.filtroTurbulencia = document.querySelector("#filtro-turbulencia");
  }

  efeitoOnda() {
    gsap.to(this.filtroTurbulencia, {
      repeat: -1,
      yoyo: true,
      duration: 20,
      attr: {
        baseFrequency: 0.03,
      }
    });
  }
}