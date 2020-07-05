class Vida {
  constructor(vidaMaxima, vidaInicial) {
    this.vidaMaxima = vidaMaxima;
    this.vidaInicial = vidaInicial;
    this.vidas = this.vidaInicial;
    this.largura = 40;
    this.altura = 33.4;
    this.xInicial = 50;
    this.y = 20;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const posicao = this.xInicial * (i);
      image(imagemCoracao, posicao + 10, this.y, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
    if (this.vidas === 0) {
      image(imagemGameOver, width / 2 - 206, height / 3);
      this.vidas--;
      noLoop();
    }
  }
}