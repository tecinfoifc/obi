var N , M

scanf("%d%d", "N", "M")

function gcd(i, N){
    while (N !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

for (let i = M; i > 0; i--){
    if (gcd(i, N) == 1){
        printf("%d", i)
        break
    }
}
    