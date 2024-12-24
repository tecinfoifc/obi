// R X indica que uma mensagem foi recebida do amigo X.
// E X indica que uma mensagem foi enviada ao amigo X.
// T X indicando que X segundos se passaram entre o evento anterior e o evento posterior a esse registro.
// Se não há registro do tipo T X entre dois registros de eventos consecutivos significa que exatamente 1 segundo se passou entre esses dois eventos.


var N, M, C;

scanf("%d", "N")

var CN = []
var tempo = 0
var T = []



for(var i = 0; i < N; i++){
    scanf("%s%d", "M", "C")
    

    if(M == "R"){
        CN.push(C)
    }
    else if(M == "E"){
        CN.push(C)
        T.push(tempo)
    }
    else{
        tempo += C
    }

}

