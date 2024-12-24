var M, F
var N
var matriz = []
var linha;
var novamatriz = []

scanf("%d%d", "M", "F")

    for (var i = 0; i < M; i++) {
        scanf("%s", "N")
        for (var j = 0; j < M; j++) {
            if (j % M === 0) {
                matriz.push([N])
            }
            else {
                matriz[matriz.length - 1].push(N)
            }
        }
    }

    printf(matriz.join('\n').replace(/,/g, ''))

    for (var k = 0; k < matriz.length; k++) {
        linha = matriz[k]
        for (var f = 0; f < linha.length; f++) {
            if (Number(linha[f]) <= F) {
                if (f % M === 0) {
                    novamatriz.push(['*'])
                }
                else {
                    novamatriz[novamatriz.length - 1].push('*')
                }
            }
            else {
                if (f % M === 0) {
                    novamatriz.push([linha[f]])
                }
                else {
                    novamatriz[novamatriz.length - 1].push(linha[f])
                }
            }
        }
    }
   // printf(novamatriz.join('\n').replace(/,/g, ''))






