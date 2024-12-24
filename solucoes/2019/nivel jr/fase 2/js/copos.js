var N, A, L

scanf("%d%s", "N", "A")

var S = A

for(var i = 0; i < N; i++){
    scanf("%d", "L")
    
    if (L == 1 && S != "C"){
        S = "B"
    }
    else if(L == 2 && S != "A"){
        S = "C"
    }
    else if(L == 3 && S != "B"){
        S = "A"
    }
}

printf("%s", S)

