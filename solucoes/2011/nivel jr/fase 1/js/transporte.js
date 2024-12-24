var A,B,C 
var X,Y,Z 

scanf("%d%d%d", "A", "B", "C")
scanf("%d%d%d", "X", "Y", "Z")

if(A <= X && B <= Y && C <= Z){
    qtd_containers = Math.floor(X / A) * Math.floor(Y / B) * Math.floor(Z / C)
    printf("%d", qtd_containers)
}
else{
    printf("%d", 0)
}

