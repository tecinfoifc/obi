var CV, CE, CS, FV, FE, FS

scanf("%d%d%d%d%d%d", "CV", "CE", "CS", "FV", "FE", "FS")

if((CV * 3 + CE + CS) > (FV * 3 + FE + FS)){
    printf("%s", 'C')
}
else if((CV * 3 + CE + CS) < (FV * 3 + FE + FS)){
    printf("%s", 'F')
}
else{
    printf("%s", '=')
}