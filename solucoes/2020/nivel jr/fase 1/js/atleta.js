var R, F, C

scanf("%d%d%d", "R", "F", "C")

if(F > (R * 3) || C < 95){
    printf("%s", "diminuir")
}
else if(F < (R * 2) && C > 97){
    printf("%s", "aumentar")
}
else{
    printf("%s", "manter")
}