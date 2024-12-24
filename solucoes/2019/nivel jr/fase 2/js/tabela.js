var J, P, V, E, D 

scanf("%d%d%d%d%d", "J", "P", "V", "E", "D")

if(J === -1){
    J = V + E + D
}
if(P === -1){
    P = 3 * V + E
}
if(V === -1){
    V = P - V * 3
}
if(D === -1){
    D = J - V - E
}
if(E === -1){
    E = P - 3 * V
}

printf("%d%d%d%d%d", J, P, V, E, D)