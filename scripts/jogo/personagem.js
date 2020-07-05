class Personagem extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdh, qtdv) {
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdh, qtdv)
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.gravidade = 6;
    this.velocidadePulo = 0;
    this.alturaPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }

  pula() {
    if (this.pulos < 2) {
      this.pulos++;
      this.velocidadePulo = this.alturaPulo;
      somPulo.play();
    }
  }
  
  aplicaGravidade() {
    this.y += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  ficaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }
  
  estaColidindo (inimigo) {
    if (this.invencivel) {
      return false;
    }
    const precisao = 0.7;
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
    return colisao;
  }
}