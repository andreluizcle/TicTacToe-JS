const casas = document.querySelectorAll(".casa");
const mensagem = document.getElementById("mensagem");
const botaoNovoJogo = document.getElementById("botao-novo-jogo");
const botaoTrocarJogadores = document.getElementById("botao-trocar-jogadores");


let nomeX = "";            
let nomeO = "";            
let jogadorAtual = "X";    
let jogoAcabou = false;    

let tabuleiro = ["", "", "", "", "", "", "", "", ""];

// Todas as formas de ganhar: 3 linhas, 3 colunas e 2 diagonais.
const combinacoesVencedoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],   // linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8],   // colunas
  [0, 4, 8], [2, 4, 6]               // diagonais
];

function perguntarNome(pergunta, nomePadrao) {
  const nome = prompt(pergunta);

  if (nome === null || nome.trim() === "") {
    return nomePadrao;
  }
  return nome.trim();
}

function pedirNomes() {
  nomeX = perguntarNome("Nome do jogador 1 (será o X):", "Jogador 1");
  nomeO = perguntarNome("Nome do jogador 2 (será o O):", "Jogador 2");
}

function nomeDoJogadorAtual() {
  if (jogadorAtual === "X") {
    return nomeX;
  }
  return nomeO;
}

function avisar(texto) {
  mensagem.textContent = texto;

  setTimeout(function () {
    alert(texto);
  }, 100);
}

function novoJogo() {
  tabuleiro = ["", "", "", "", "", "", "", "", ""];
  jogadorAtual = "X";
  jogoAcabou = false;

  casas.forEach(function (casa) {
    casa.textContent = "";
    casa.classList.remove("x", "o", "vencedora");
  });

  mensagem.textContent = "Vez de " + nomeX + " (X)";
}

// Procura uma combinação vencedora.
// Devolve a combinação (ex.: [0, 1, 2]) se alguém ganhou, ou null se ninguém ganhou.
function buscarCombinacaoVencedora() {
  for (const combinacao of combinacoesVencedoras) {
    const a = combinacao[0];
    const b = combinacao[1];
    const c = combinacao[2];

    // As três casas precisam estar preenchidas e ser iguais
    if (tabuleiro[a] !== "" && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      return combinacao;
    }
  }
  return null;
}

// Executa a jogada na casa clicada (indice vai de 0 a 8).
function jogar(indice) {
  // Ignora o clique se o jogo já acabou ou se a casa já está ocupada
  if (jogoAcabou || tabuleiro[indice] !== "") {
    return;
  }

  // Marca a jogada no tabuleiro (lista) e na tela
  tabuleiro[indice] = jogadorAtual;
  casas[indice].textContent = jogadorAtual;
  casas[indice].classList.add(jogadorAtual.toLowerCase());  // vira "x" ou "o"

  // Alguém ganhou
  const combinacao = buscarCombinacaoVencedora();
  if (combinacao !== null) {
    jogoAcabou = true;

    combinacao.forEach(function (posicao) {
      casas[posicao].classList.add("vencedora");
    });

    avisar("Parabéns, " + nomeDoJogadorAtual() + " (" + jogadorAtual + ")! Você venceu!");
    return;
  }

  // Deu empate (todas as casas preenchidas e ninguém ganhou)
  if (!tabuleiro.includes("")) {
    jogoAcabou = true;
    avisar("Deu velha! O jogo terminou empatado.");
    return;
  }

  // O jogo continua: passa a vez para o outro jogador
  if (jogadorAtual === "X") {
    jogadorAtual = "O";
  } else {
    jogadorAtual = "X";
  }
  mensagem.textContent = "Vez de " + nomeDoJogadorAtual() + " (" + jogadorAtual + ")";
}

function trocarJogadores() {
  pedirNomes();
  novoJogo();
}

// Cada casa chama a função jogar() passando a sua posição
casas.forEach(function (casa, indice) {
  casa.addEventListener("click", function () {
    jogar(indice);
  });
});

botaoNovoJogo.addEventListener("click", novoJogo);
botaoTrocarJogadores.addEventListener("click", trocarJogadores);

setTimeout(trocarJogadores, 100);