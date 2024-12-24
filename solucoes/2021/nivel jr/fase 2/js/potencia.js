var N, A 
scanf("%d", "N")

var resul = 0

for(var i = 0; i < N; i++){
    scanf("%s", "A")

    var pot = Math.floor(A.substring(0, A.length - 1)) ** Math.floor(A[A.length - 1])

    resul += pot
}

printf(resul)