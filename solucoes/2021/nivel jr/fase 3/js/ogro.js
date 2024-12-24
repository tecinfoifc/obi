var M
var direita = ''
var esquerda = ''

scanf("%d", "M")

for(var i = 0; i < M; i++){
    if(i < 5){
        direita += 'I'
    }
    else{
        esquerda += 'I'
    }
}

if(M == 0){
    printf("%s\n%s", '*', '*')
}
else if(M <= 5){
    printf("%s\n%s", direita, '*')
}
else{
    printf("%s\n%s", direita, esquerda)
}