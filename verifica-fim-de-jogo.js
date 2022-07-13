//Todas as funções responsáveis pelo fim de jogo

//Variáveis 
let fimDeJogo = false;

function verificaFimDeJogo() {
    verificaEmpate();
    verificaHorizontal();
    verificaVertical();
    verificaDiagonal();
}

//Função que verifica o preenchimento total de uma linha pelo mesmo jogador
function verificaHorizontal() {
    for (let linha = 0; linha < 3; linha++) {
        if (tabelaJogadas[linha][0] == tabelaJogadas[linha][1] && tabelaJogadas[linha][1] == tabelaJogadas[linha][2] && tabelaJogadas[linha][1] != '') {
            exibirResultado("O Jogador " + jogador + " é o vencedor!");
            fimDeJogo = true;
            break;
        }
    }
}

//Função que verifica o preenchimento total de uma coluna pelo mesmo jogador
function verificaVertical() {
    for (let coluna = 0; coluna < 3; coluna++) {
        if (tabelaJogadas[0][coluna] == tabelaJogadas[1][coluna] && tabelaJogadas[1][coluna] == tabelaJogadas[2][coluna] && tabelaJogadas[1][coluna] != '') {
            exibirResultado("O Jogador " + jogador + " é o vencedor!");
            fimDeJogo = true;
            break;
        }
    }
}

//Função que verifica o preenchimento total de uma diagonal pelo mesmo jogador
function verificaDiagonal() {
    if (tabelaJogadas[0][0] == tabelaJogadas[1][1] && tabelaJogadas[1][1] == tabelaJogadas[2][2] && tabelaJogadas[1][1] != '') {
        fimDeJogo = true;
        exibirResultado("O Jogador " + jogador + " é o vencedor!");
    }
    if (tabelaJogadas[0][2] == tabelaJogadas[1][1] && tabelaJogadas[1][1] == tabelaJogadas[2][0] && tabelaJogadas[1][1] != '') {
        fimDeJogo = true;
        exibirResultado("O Jogador " + jogador + " é o vencedor!");
    }
}

//Função que verifica empate
function verificaEmpate() {
    let casasUsadas = 0;
    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            if (tabelaJogadas[linha][coluna] != '') {
                casasUsadas++;
            }
            if (casasUsadas == 9 && fimDeJogo == false) {
                fimDeJogo = true;
                exibirResultado("Empate!");
                break;
            }
        }
    }
}