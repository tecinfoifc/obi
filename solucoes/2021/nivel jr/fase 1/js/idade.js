var X,Y,Z

scanf("%d", "X")
scanf("%d", "Y")
scanf("%d", "Z")

if((X >= Y && X <= Z) || (X >= Z && X <= Y)){
    printf("%d\n", X)
}
else if((Y >= Z && Y <= X) || (Y >= X && Y <= Z)){
    printf("%d\n", Y)
}  
else if((Z >= X && Z <= Y) || (Z >= Y && Z <= X)){
    printf("%d\n", Z)
}  
