var N, X, Y
var inicio = 0
var termino = 0 
var consultas = 0

scanf("%d", "N")

for(var i = 0; i < N; i++){
    scanf("%d%d", "X", "Y")
    if(X >= termino){
        inicio = X
        termino = Y
        consultas += 1
    }
}

printf("%d", consultas)