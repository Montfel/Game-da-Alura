function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigoG = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoT = loadImage('imagens/inimigos/troll cortado.png');
  imagemInimigoV = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemCoracao = loadImage('imagens/personagem/coracao.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  fita = loadJSON('fita/fita.json');
}