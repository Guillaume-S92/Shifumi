const scissors = {
    name: 'scissors',
    beats: 'paper',
    loose: 'rock',
    winner: function() {
        console.log('scissors wins');
    }
};

const rock = {
    name: 'rock',
    beats: 'scissors',
    loose: 'paper',
    winner: function() {
        console.log('rock wins');
    }
};

const paper = {
    name: 'paper',
    beats: 'rock',
    loose: 'scissors',
    winner: function() {
        console.log('paper wins');
    }
};

const player1 = {
    name: 'player1',
    choice: null, 
    score: 0,
    setChoice: function(choice) {
        this.choice = choice;
    }
};

const player2 = {
    name: 'player2',
    choice: null, 
    score: 0,
    setChoice: function(choice) {
        this.choice = choice;
    }
};

const options = [scissors, rock, paper];

// Générer un index aléatoire pour choisir parmi les options
const randomIndex1 = Math.floor(Math.random() * options.length);
const randomIndex2 = Math.floor(Math.random() * options.length);

// Choix aléatoires pour les joueurs
player1.setChoice(options[randomIndex1]);
player2.setChoice(options[randomIndex2]);

if (player1.choice.beats === player2.choice.name) {
    player1.choice.winner();
    player1.score++;
} else if (player2.choice.beats === player1.choice.name) {
    player2.choice.winner();
    player2.score++;
} else {
    console.log("It's a tie");
}

console.log(`Player 1 score: ${player1.score}`);
console.log(`Player 2 score: ${player2.score}`);

