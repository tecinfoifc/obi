var M, N, D

scanf("%d", "M")
scanf("%d", "N")

var vagas_d = []
var vagas_pegas = []

for(var i = 0; i < N; i++){
    scanf("%d", "D")
    vagas_d.push(D)
}


for(var i = 0; i < N; i++){
    if(!vagas_pegas.includes(vagas_d[i])){
        vagas_pegas.push(vagas_d[i])
    }
}


printf("%d", vagas_pegas.length)

