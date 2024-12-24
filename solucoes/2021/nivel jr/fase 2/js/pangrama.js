var alfabeto = new Set('abcdefghijlmnopqrstuvxz')
var F

scanf("%s", "F")

var letras_encontradas = new Set()
for(var i = 0; i < F.length; i++){
    if (/[a-zA-Z]/.test(C)){
        letras_encontradas.add(C)
    }
}

if(letras_encontradas.length == alfabeto.length){
    printf("%s", "S")
}
else{
    printf("%s", "N")
}
