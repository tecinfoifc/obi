var L, N
var cl1 = 0
var cl2 = 0

scanf("%d", "L")

for(var i = 0; i < L; i++){
    scanf("%d", "N")

    if (N === 2 && cl2 === 0){
        cl2 += 1
    }
    else{
        cl2 = 0
    }
    
    if(N == 1 && cl1 == 0){
        cl1 += 1
    }
    else{
        cl1 = 0
    }
}
printf("%d", cl1)
printf("%d", cl2)