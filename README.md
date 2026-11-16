# Jogo da Velha em JavaScript

Jogo da Velha para dois jogadores, feito com HTML, CSS e JavaScript.

Projeto da **Atividade de Fixação das Unidades 09 a 12** da disciplina **SI401 – Programação para a Web** (2º semestre de 2026, Prof. Guilherme Palermo Coelho).

## O que a atividade pedia

- Solicitar o nome de cada jogador ao carregar a página.
- Preparar o tabuleiro para um novo jogo, indicando de quem é a vez (pelo nome).
- Mostrar uma mensagem quando um jogador vencer ou der empate.
- Usar a versão mais recente do padrão HTML.

## Funcionalidades

- Pede o nome dos dois jogadores ao abrir a página (X e O).
- Mostra de quem é a vez, por exemplo: `Vez de Maria (X)`.
- Avisa a vitória ou o empate na tela e em um `alert()`.
- Destaca em amarelo as três casas da vitória.
- Botão **Novo jogo**: reinicia o tabuleiro com os mesmos jogadores.
- Botão **Trocar jogadores**: pede novos nomes e reinicia o jogo.

## Como jogar

1. Informe o nome do jogador 1 (**X**) e do jogador 2 (**O**).
2. Clique em uma casa vazia para jogar. A vez passa para o outro jogador.
3. Vence quem completar uma linha, coluna ou diagonal. Se as 9 casas forem preenchidas sem vencedor, dá empate.

## Como executar

Baixe ou clone o repositório e abra o arquivo `index.html` no navegador.

```bash
git clone https://github.com/andreluizcle/TicTacToe-JS.git
```

## Estrutura

```
├── index.html   # Estrutura da página
├── estilo.css   # Estilo visual
└── script.js    # Lógica do jogo
```

## Tecnologias

HTML5, CSS3 e JavaScript (sem bibliotecas externas).
