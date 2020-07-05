class Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdh, qtdv) {
    this.imagem = imagem;
    this.largura = largura
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.abs = 0;
    this.ord = 0;
    this.qtdh = qtdh;
    this.qtdv = qtdv;
  }

  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.abs, this.ord, this.larguraSprite, this.alturaSprite);
    this.quadros();
  }

  quadros() {
    this.abs += this.larguraSprite;
    if (this.abs === this.larguraSprite * this.qtdh) {
      this.abs = 0;
      this.ord += this.alturaSprite;
      if (this.ord === this.alturaSprite * this.qtdv) {
        this.abs = 0;
        this.ord = 0;
      }
    }
  }
}