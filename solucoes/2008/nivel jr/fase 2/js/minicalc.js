var N, D, Q

scanf("%d%d%d", "N", 'D', "Q")

if(N > D && N > Q){
    prinf("%d%d", D, Q)
}
else if(N > D/10 && N > Q/10){
    if(Number.isInteger(D/10) && Number.isInteger(Q/10)){
        printf("%d%d\n", D/10, Q/10)
    }
    else{
        printf("%s", "IMPOSSIVEL")
    }
}