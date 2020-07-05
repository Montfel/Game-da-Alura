class TelaInicial {
  constructor () {
    
  }
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textAlign(CENTER);
    textSize(50);
    textFont(fonteTelaInicial);
    text('As aventuras de', width / 2, height / 4.5);
    textSize(75);
    text('Hispsta', width / 2, height / 2.5);
  }
  
  _botao() {
    botaoGerenciador.draw();
  }
}