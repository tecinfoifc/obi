var N, E
var paineis = 0
scanf("%d%s", "N", "E")

for(var i = 0; i < N; i++){
    if(E[i] == 'P'){
        paineis += 2
    }
    else if (E[i] == 'C'){
        paineis += 2
    }
    else if(E[i] == 'A'){
        paineis += 1
    }
}
printf("%d", paineis)