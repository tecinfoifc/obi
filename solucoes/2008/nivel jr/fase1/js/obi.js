var N, P, X, Y;
var ganhadores = 0;

scanf("%d%d", "N", "P"); 

for(var i = 0; i < N; i++){
    scanf("%d%d", "X", "Y"); 
    if((X + Y) >= P){ ganhadores++; }	
}

printf("%d\n", ganhadores);
