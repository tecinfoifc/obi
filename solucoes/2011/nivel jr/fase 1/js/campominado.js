var R, T
var campo = [0]
var novoarr = []

scanf("%d", "R")

for(var i = 0; i < R + 1; i++){
    scanf("%d", "T")
    if (i == R + 1){
        campo.push(0)
        break
    }
    campo.push(T)
}

for (var i = 1; campo.length + 1; i++){
    var contador = 0
    if (campo[i + 1] == 1){
        contador += 1
    }
    if (campo[i - 1] == 1){
        contador += 1
    }
    novocampo = campo[i] + contador
    novoarr.append(novocampo)
    contador = 0
}

    

printf("%d", novoarr.join(' '))
