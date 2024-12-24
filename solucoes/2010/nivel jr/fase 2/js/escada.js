var N, T
var tempos = []
var lig = 10

for(var i = 0; i < N; i++){
    scanf("%d", "T")
    tempos.push(T)
}

if(N == 0){
    printf("%d", 0)
}
else{
    for(var i = 1; i < N; i++){
        var intervalo = tempos[i] - tempos[i-1]
        if(intervalo < 10){
            lig += intervalo
        }
        else{
            lig += 10
        }
    }
    print(lig)
}