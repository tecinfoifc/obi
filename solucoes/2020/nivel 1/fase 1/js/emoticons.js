var C = 0
var D = 0
var c, msg;

scanf("%c","c");
while (c != '\n') {
	msg += c;
	scanf("%c","c");
}

for(var i = 0; i < msg.length; i++){
    if(M[i] == ")" ){
        D++
    }
    else if(M[i] == "("){
        C++
    }
}

if(C > D){
    printf("%s", "chateado")
}
else if(D > C){
    printf("%s", "divertido")
}
else{
    printf("%s", "neutro")
}