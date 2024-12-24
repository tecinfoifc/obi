var N, E, A, G;
scanf("%d", "N");
var estados = [];

for (var i = 0; i < N; i++) {
  scanf("%d%d%d", "E", "A", "G");
  var vantajoso = G * 0.7;
  if (A <= vantajoso) {
    estados.push(E);
  }
}
if (estados == "") {
  printf("%s", "*");
} else {
  for (var i = 0; i < estados.length; i++) {
    printf("%s", estados[i]);
  }
}
