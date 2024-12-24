var R, N;
var nums = []
var sum = 0

scanf("%d", "R")

for(var i = 0; i < R; i++){
    scanf("%d", "N")

    if(N === 0){
        nums.pop()
    }
    else{
        nums.push(N)
    }
}

for(let i = 0; i < nums.length; i++){
    sum += nums[i]
}

printf("%d\n", sum)
