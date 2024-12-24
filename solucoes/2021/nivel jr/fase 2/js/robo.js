var N, C, S 
var A  
var steps = []

scanf("%d%d%d", "N", "C", "S")

var vzs = 0
var est = 1

for(var i = 0; i < C; i++){
    scanf("%d", "A")
    steps.push(A)
}

if (est == S){
    vzs += 1 
}

for(var i = 0; i < C; i++){
    if (steps[i] == 1){
        est += 1
    }
    else if(steps[i] == -1){
        est -= 1
    }
    
    if (est > N){
        est = 1
    }
    else if(est < 1){
        est = N
    }
        
    if(est == S){
        vzs += 1
    }
}

printf("%d", vzs)