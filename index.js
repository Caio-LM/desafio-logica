// Desafio Classificador de nível do Heroi"

var xp = 8500
var nickname = "Cleiton Rasta"

switch (true) {
    case (xp <= 1000):
        var elo = "Ferro"
        console.log("O Herói de nome " + nickname + " está no nível de " + elo );
        break;

    case (xp >= 1001 && xp <= 2000):
        var elo = "Bronze"
        console.log("O Herói de nome " + nickname + " está no nível de " + elo);
        break;

    case (xp >= 2001 && xp <= 3000):
        var elo = "Prata"
        console.log("O Herói de nome " + nickname + " está no nível de " + elo);
        break;
        
    case (xp >= 3001 && xp <= 4000):
        var elo = "Ouro"
        console.log("O Herói de nome " + nickname + " está no nível de " + elo);
        break;

    case (xp >= 4001 && xp <= 5000):
        var elo = "Platina"
        console.log("O Herói de nome " + nickname + " está no nível de " + elo);
        break;

    case (xp >= 5001 && xp <= 6000):
            var elo = "Ascendente"
            console.log("O Herói de nome " + nickname + " está no nível de " + elo);
            break;
            
    case (xp >= 6001 && xp <= 7000):
            var elo = "Imortal"
            console.log("O Herói de nome " + nickname + " está no nível de " + elo);
            break;
    
    case (xp >= 7001):
            var elo = "Radiante"
            console.log("O Herói de nome " + nickname + " está no nível de " + elo);
            break;

    default:
        console.log("lendario");
}




