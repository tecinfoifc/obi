var N, F, figurinha
var figurinhas = []

scanf("%d%d", "N", "F")

for(var i = 0; i < F; i++){
    scanf("%d", "figurinha")
    if (!figurinhas.includes(figurinha)){
        figurinhas.push(figurinha)
    }
}

printf("%d\n", N - figurinhas.length)