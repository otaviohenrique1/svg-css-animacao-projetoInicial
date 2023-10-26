class Cards {
  constructor() {
    // 
  }

  calculoScroll() {
    const posicao = document.getElementById("section-dicas").getBoundingClientRect()["y"];
    console.log(posicao);
    if (posicao <= 25) {
      // console.log("Chegou");
      document.querySelector(".card-esq").style.transform = `translate(${posicao}%)`;
      document.querySelector(".card-dir").style.transform = `translate(${posicao}%)`;
    }
  }
}

export { Cards };