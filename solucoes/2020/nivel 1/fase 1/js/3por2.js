var N, P;
var nums = [];
var soma = 0;

scanf('%d', "N");

function ordena(a, b){
    return a - b;
}

for(var i = 0; i < N; i++){
   scanf("%d", "nums[i]");
}

nums.sort(ordena);
nums.reverse();

for(var i = 1; i <= nums.length; i++){
	if(i% 3 !== 0){
       soma += nums[i-1];
    }
}

printf("%d", soma);