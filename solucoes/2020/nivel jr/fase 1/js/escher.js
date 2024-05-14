var Q 
var E
var S = []
var nums = []

scanf("%d", "Q")

for(var i = 0; i < Q; i++){
    scanf("%d", "E")
    S.push(E)
}

for(var i = 0; i < Q / 2; i++){
    if((S[i+1] + S[Q-i-2]) === (S[i] + S[Q-i-1])){
        nums.push("S")
    }
    else {
        nums.push("N")
    }
}


if(nums.includes("N")){
    printf("%s\n", "N")
}
else{
    printf("%s\n", "S")
}