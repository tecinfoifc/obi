var M, I1, I2
var I3 = M-I1-I2

scanf("%d%d%d", "M","I1", "I2")

if(I1 >= I3 && I1 >= I2){
    printf("%d\n", I1)
}
else if(I2 >= I3 && I2 >= I1){
    printf("%d\n", I2)
}
else{
    printf("%d\n", I3)
}