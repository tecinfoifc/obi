var T 
var coposQ = 0
var L, C 

scanf("%d", "T")

for(var i = 0; i < T; i++){
    scanf("%d%d", "L", "C")
    if(L > C){
        coposQ += C
    }
}

printf("%d", coposQ)