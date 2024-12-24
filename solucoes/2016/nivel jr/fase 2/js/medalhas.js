var T1, T2, T3

scanf("%d%d%d", "T1", "T2", "T3")

if(T1 < T2 && T1 < T3){
    if(T2 < T3){
        printf("%d", 1)
        printf("%d", 2)
        printf("%d", 3)
    }
    else{
        printf("%d", 1)
        printf("%d", 3)
        printf("%d", 2)
    }
}
else if(T2 < T1 && T2 < T3){
    if(T1 < T3){
        printf("%d", 2)
        printf("%d", 1)
        printf("%d", 3)
    }
    else{
        printf("%d", 3)
        printf("%d", 1)
        printf("%d", 2)
    }
}
else if(T3 < T1 && T3 < T2){
    if(T1 < T2){
        printf("%d", 2)
        printf("%d", 3)
        printf("%d", 1)
    }
    else{
        printf("%d", 3)
        printf("%d", 2)
        printf("%d", 1)
    }
}