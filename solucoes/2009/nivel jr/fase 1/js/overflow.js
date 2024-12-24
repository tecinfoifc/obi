var V
var P, C, Q

scanf("%d", "V")
scanf("%d%s%d", "P", "C", "Q")

if(C == '*'){
    var resultado = int(P) * int(Q)

    if(resultado > V){
        printf("%s", 'OVERFLOW')
    }
    else{
        printf("%s", 'OK')
    }
}
else{
    var resultado = P + Q

    if(resultado > V){
        printf("%s", 'OVERFLOW')
    }
    else{
        printf("%s", 'OK')
    }
}