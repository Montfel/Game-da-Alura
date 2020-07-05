function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial()
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height/1.3);
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}