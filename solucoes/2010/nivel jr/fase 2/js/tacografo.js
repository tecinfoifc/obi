var N 
var X, Y
var total = 0 

scanf("%d", "N")

for(var i = 0; i < N; i++){
    scanf("%d%d", "X", "Y")
    total += X * Y
}

printf("%d", total)