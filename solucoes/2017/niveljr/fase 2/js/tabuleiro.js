var A, C;
var tabuleiro = [];

for (var i = 0; i < A; i++) {
  var linha = [];
  for (var j = 0; j < A; j++) {
    scanf("%d", "C");
    linha.push(C);
  }
  tabuleiro.push(linha);
  linha = [];
}

for (var i = 1; i < A; i++) {
  for (var j = 1; j < A; j++) {
    var branco = 0;
    var preto = 0;

    if (tabuleiro[i - 1][j - 1] == 0) {
      branco += 1;
    } else {
      preto += 1;
    }

    if (tabuleiro[i - 1][j] == 0) {
      branco += 1;
    } else {
      preto += 1;
    }

    if (tabuleiro[i][j - 1] == 0) {
      branco += 1;
    } else {
      preto += 1;
    }

    if (preto > branco) {
      tabuleiro[i][j] = 0;
    } else {
      tabuleiro[i][j] = 1;
    }

    preto = 0;
    branco = 0;
  }
}

printf("%d", tabuleiro[A - 1][A - 1]);
