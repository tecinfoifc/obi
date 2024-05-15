var Q;
var G, R;
var A = 0;

scanf("%d", "Q");
scanf("%s", "G");
scanf("%s", "R");

for(var i = 0; i < G.length; i++){ 
    if(G[i] == R[i]){ 
        A++ 
    } 
} 

printf("%d\n", A);
