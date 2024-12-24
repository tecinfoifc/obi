var M, N, P, L, C, S_C, S_L, R_C, R_L 

scanf("%d%d%d", "M", "N", "P")

var lago = []
var is_possible = 'S'

for(var i = 0; i < P; i++){
    var Col = []
    scanf("%d%d", "L", "C")
    Col.push(L)
    Col.push(C)
    lago.push(Col)
}

for(var i = 0; i < P-1; i++){
    var cond_X = lago[i][0] - lago[i+1][0] > 3 || lago[i+1][0] - lago[i][0] > 3
    var cond_Y = lago[i][1] - lago[i+1][1] > 3 || lago[i+1][1] - lago[i][1] > 3 
    if(cond_Y || cond_X){
        is_possible = 'N'
        break  
    }
}

scanf("%d%d", "S_C", "S_L")
scanf("%d%d", "R_C", "R_L")

printf("%s", is_possible)