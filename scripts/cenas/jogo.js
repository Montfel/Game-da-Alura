class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem, 0, 30, 110, 135, 220, 270, 4, 4);
    const inimigoG = new Inimigo(imagemInimigoG, width - 52, 30, 52, 52, 104, 104, 4, 7, 8);
    const inimigoT = new Inimigo(imagemInimigoT, width, 10, 200, 200, 400, 400, 5, 5, 8);
    const inimigoV = new Inimigo(imagemInimigoV, width, 200, 100, 75, 200, 150, 3, 5, 8);
    pontuacao = new Pontuacao(3, 3);
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    inimigos.push(inimigoG);
    inimigos.push(inimigoT);
    inimigos.push(inimigoV);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      personagem.pula();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    vida.draw();
    personagem.exibe();
    personagem.aplicaGravidade();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.reaparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();
    }
  }
}