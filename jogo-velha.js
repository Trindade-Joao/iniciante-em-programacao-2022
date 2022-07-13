
const X = "X";
const O = "O";

let jogada = 1;
let jogador = X;
let tabelaJogadas = [];

carregaMatriz(tabelaJogadas, '');

//Função que monta e carrega o valor na matriz
function carregaMatriz(matriz, valor) {  
    for (let linha = 0; linha < 3; linha++) {
        matriz[linha] = [];
        for (let coluna = 0; coluna < 3; coluna++) {
            matriz[linha][coluna] = valor;
        }
    }
}

//Função que valida as jogadas não permitindo jogar em casas já preenchidas
function jogadaValida(posicaoLinha, posicaoColuna) {
    if (tabelaJogadas[posicaoLinha - 1][posicaoColuna - 1] == '' && fimDeJogo == false) {
        jogada++;
        desenharSimbolo(jogador, posicaoLinha, posicaoColuna);
        tabelaJogadas[posicaoLinha - 1][posicaoColuna - 1] = jogador;
    }
}

//Função que define de quem é a vez de jogar e mostra na tela
function defineJogador() {
    if (fimDeJogo == false) {
        if (jogada % 2 != 0) {
            jogador = X;
        } else {
            jogador = O;
        }
        marcarJogadorAtivo(jogador);
    }
}

//Função que reinicia o jogo
function reiniciarJogo() {
    location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {

    jogadaValida(posicaoLinha, posicaoColuna);
    verificaFimDeJogo()
    defineJogador();
}