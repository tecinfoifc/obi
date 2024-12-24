var A, M
var Montanha = []
scanf("%d", "A")

for(var i = 0; i < A; i++){
    scanf("%d", "M")
    Montanha.push(M)
}

function ordenar(a, b){
    return a - b
}

Montanha.sort(ordenar)

if(Montanha[A-1] === Montanha[A-2]){
    printf("%s", "S")
}
else{
    printf("%s", "N")
}