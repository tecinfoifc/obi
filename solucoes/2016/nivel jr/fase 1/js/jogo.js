var P, D_1, D_2

scanf("%d%d%d", "P", "D_1", "D_2")

if ((D_1 + D_2) % 2 === 0 && P == 1){
    printf("%d", 1)
}
else if ((D_1 + D_2) % 2 === 0 && P === 0){
    printf("%d", 0)
}
else if ((D_1 + D_2) % 2 != 0 && P == 0){
    printf("%d", 1)
}
else{
    printf("%d", 0)
}