//desafio usando if
const xp = 6004
const nickname = "Carleto"
if(xp <= 1000){
    let elo = "Ferro"
    console.log("O " + nickname + " é elo " + elo )
}
if(xp >= 1001 && xp <= 2000){
    let elo = "Prata"
    console.log("O " + nickname + " é elo " + elo )
}
if(xp >= 2001 && xp <= 3000){
    let elo = "Ouro"
    console.log("O " + nickname + " é elo " + elo )
}
if(xp >= 3001 && xp <= 4000){
    let elo = "Platina"
    console.log("O " + nickname + " é elo " + elo )
}
if(xp >= 4001 && xp <= 5000){
    let elo = "Diamente"
    console.log("O " + nickname + " é elo " + elo )
}
if(xp >= 5001 && xp <= 6000){
    let elo = "Desafiante"
    console.log("O " + nickname + " é elo " + elo )
}
if(xp >= 6001){
    let elo = "Lendario"
    console.log("O " + nickname + " é elo " + elo )
}
else{
    console.log("O " + nickname + " é desprovido de experiencia")
}