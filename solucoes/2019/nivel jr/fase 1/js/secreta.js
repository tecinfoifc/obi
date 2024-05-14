var N, M
var nums = []
var counter = 0

scanf("%d", "N")

for(var i = 0; i < N; i++){
    scanf("%d", "M")
    nums.push(M)
}


for(var i = 0; i < nums.length; i++){
    if(nums[i-1] !== nums[i]){
        counter++
    }
}
printf("%d\n", counter)
