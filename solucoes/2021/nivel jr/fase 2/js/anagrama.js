var N, A, B

scanf("%d%s%s", "N", "A", "B")

var frase_a = Array.from(A).filter(char => /[a-zA-Z]/.test(char)).join('')
var frase_b = Array.from(B).filter(char => /[a-zA-Z]/.test(char)).join('')

var frase_ordA = Array.from(frase_a).sort().join('');
var frase_ordB = Array.from(frase_b).sort().join('');

if (frase_ordA === frase_ordB) {
    console.log("S");
} else {
    console.log("N");
}
