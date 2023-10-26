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

export { Icones };