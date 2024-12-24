var N, S, A 
scanf("%d%d", "N", "S")
var saldo_dias = [S]

function ordenar(a, b){
	return a-b
}

for(var i = 0; i < N; i++){
    scanf("%d", "A")
    S += A
    saldo_dias.push(S)
}

saldo_dias.sort(ordenar)

printf("%d", saldo_dias[0])
