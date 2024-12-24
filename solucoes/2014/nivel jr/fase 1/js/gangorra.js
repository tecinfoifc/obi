var P1, C1, P2, C2

scanf("%d%d%d%d", "P1", "C1", "P2", "C2")

if (P1*C1 == P2*C2){
    printf("%d", 0)
}
else if (P1*C1 < P2*C2){
    printf("%d", 1)
}
else{
    printf("%d", -1)
}