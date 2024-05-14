var Pre
var T
var P
var M
var counterP = 0
var counterM = 0

scanf("%d", "Pre")

for(var i = 0; i < Pre; i++){
    scanf("%d", "T")

    if(T === 1){
        counterP++
    }
    else{
        counterM++
    } 
}

scanf("%d", "P")
scanf("%d", "M")

if(counterP === P && M === counterM){
    printf("%s", "S")
}
else{
    printf("%s", "N")
}