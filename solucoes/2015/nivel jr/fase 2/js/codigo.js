N, C
var code = []
scanf("%d", "N")
var qtd = 0

for(var i = 0; i < N; i++){
    scanf("%d", "C")
    code.push(C)
}

for(var i = 0; i < N; i++){
    if(code[i] == 1 && code[i + 1] == 0 && code[i + 2] == 0){
        qtd += 1
    }
    if(i == N - 3){
        break
    }
}

printf("%d", qtd)