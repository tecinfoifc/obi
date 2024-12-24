var A, B 

scanf('%s%s', 'A', "B")

if(A.length > B.length){
    B = '0' + B
}
else if(B.length > A.length){
    A = '0' + A
}

var A_arr = A.split('')
var B_arr = B.split('')

for(var i = 0; i < A.length; i++){
    if(Number(A[i]) > Number(B[i])){
        var index = B_arr.indexOf(B[i])
        B_arr.splice(index, 1)
    }
    else if(Number(B[i]) > Number(A[i])){
        var index = A_arr.indexOf(A[i])
        A_arr.splice(index, 1)
    }
}

if(A_arr.length === 0){
    printf("%s%s", B_arr.join(''), "-1")
}
else if(B_arr.length === 0){
    printf("%s%s", "-1", A_arr.join(''))
}
else{
    printf("%s%s", A_arr.join(''), B_arr.join(''))
}