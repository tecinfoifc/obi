var P1, P2, P3, P4, P5, P6
var V = 0
var G = -1

scanf("%s", "P1")
scanf("%s", "P2")
scanf("%s", "P3")
scanf("%s", "P4")
scanf("%s", "P5")
scanf("%s", "P6")

if(P1 == "V"){
    V += 1
}
if(P2 == "V"){
    V += 1
}
if(P3 == "V"){
    V += 1
}
if(P4 == "V"){
    V += 1
}
if(P5 == "V"){
    V += 1
}
if(P6 == "V"){
    V += 1
}

if(V >= 5 && V <= 6){
    G = 1
}
else if(V >= 3 && V <= 4){
    G = 2
}
else if(V >= 1 && V <= 2){
    G = 3
}

printf("%d", G)



