var H, P, F, D 

scanf("%d%d%d%d", "H", "P", "F", "D")

var pos = F

if(D === -1){
    while(True){
        pos = (pos - 1) % 16
        printf(pos)
        if(pos === H){
            printf("S")
            break
        }
        if(pos === P){
            printf("%s","N")
            break
        }
    }
}
else{  
    while(True){
        pos = (pos + 1) % 16
        if(pos === H){
            printf("%s", "S")
            break
        }
        if(pos === P){
            printf("%s", "N")
            break
        }
    }
}