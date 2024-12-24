var N, R

scanf("%d", "N")

var minenv = 0
for(var i = 0; i < N; i++){
    scanf("%d", "R")
    if (i === 0){
        minenv = R
    }
    else if(minenv > R){
        minenv = R
    }
}

printf("%d", minenv)