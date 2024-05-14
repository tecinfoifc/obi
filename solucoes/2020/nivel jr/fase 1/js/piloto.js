var A, B ,C

scanf("%d%d%d", "A", "B", "C")

if((B-A) < (C-B)){
    printf("%d\n", 1)
}
else if((B-A) > (C-B)){
    printf("%d\n", -1)
}
else if((B-A) === (C-B)){
    printf("%d\n", 0)
}