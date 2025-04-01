function calcularRank (vitoria, derrota){
    return vitoria - derrota;
}
let rank = calcularRank (20,5);

if (rank <= 10 ) {
    console.log("Seu rank é Ferro")
} 
else if(rank >=11 <=20) {
    console.log("Seu rank é Bronze")
}
else if (rank >21 <=50){
    console.log("Seu rank é Prata")
}
else if (rank >51 <=80) {
    console.log("Seu rank é Ouro")
}
else if (rank >81 <=90) {
    console.log("Seu rank é Diamante")
}
else if (rank >91 <=100) {
    console.log("Seu rank é Lendário")
}
else if (rank >101) {
    console.log("Seu rank é Imortal")
}

console.log ("Seu saldo de vitórias é de "+ rank +" pontos");

