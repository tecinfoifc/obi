var A, B
var nums = []
var lucro = 0

scanf('%d', "A")

for(var i = 0; i < A; i++){
    scanf("%d", "B")
    nums.push(B)
}

for(var i = 0; i < A - 3; i++){
    var max_lucro = nums[i] + nums[i+1] + nums[i+2] + nums[i+3]
    if(i === 0){
        lucro = max_lucro
    }
    else if(max_lucro > lucro){
        lucro = max_lucro
    }
}

printf("%d", lucro)