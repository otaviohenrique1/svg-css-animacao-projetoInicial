class Footer {
  constructor() {
    this.filtroFurbulencia = document.querySelector("#filtro-turbulencia");
  }

  efeitoOnda() {
    gsap.to(this.filtroFurbulencia, {
      repeat: -1,
      yoyo: true,
      duration: 20,
      attr: {
        baseFrequency: 0.03,
      }
    });
  }
}

export { Footer };