var  A, B, C, H, L

scanf("%d%d%d%d%d", "A","B", "C", "H", "L")

if((A <= H && B <= L) || (A <= L && B <= H)){ 
    printf("%s", "S") 
}
else if((A <= H && C <= L) || (A <= L && C <= H)){ 
    printf("%s", "S") 
}
else if((B <= H && C <= L) || (B <= L && C <= H)){
    printf("%s", "S") 
}
else{
    printf("%s", "N")
}
