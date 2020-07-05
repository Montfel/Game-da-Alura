class Inimigo extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdh, qtdv, velocidade) {
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdh, qtdv)
    
    this.velocidade = velocidade;
    this.x = width;
  }
  move() {
    this.x = this.x - this.velocidade;
    }
  reaparece(){
    this.x = width;
  }
}