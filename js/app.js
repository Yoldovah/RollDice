//tableau de dés
var dices = [];
var scorePlayer=[];
let scorep = document.querySelector('.scoreplayer');
var scoreDealer=[];
//Creation du nombre de dé voulu que l'on stock dans un tableau
function createDice(nbde){
    for (i = 0; i<nbde*2 ;i++){
let diceDiv = document.createElement('div');
diceDiv.classList.add('dice');
if (i < nbde){
player.appendChild(diceDiv);
}
else {
document.querySelector('#dealer').appendChild(diceDiv);
}
dices.push(diceDiv);
    }
}
//fonction qui renvoie un nb aleatoire d'un dé à 6 faces
function randomNumber(){
        return Math.floor(Math.random()*6)+1;
}
//function du jeu
function rollDice(){
    var nbde = prompt('Combien de dé voulez-vous jouer? (entre 1 et 20)');
    while (isNaN(parseInt(nbde,10))|| nbde<1 || nbde>20){
        var nbde = prompt('Entrer un nombre de dé à jouer entre 1 et 20!!!');
    }
    createDice(nbde);
    console.log(dices);
    for (i = 0; i < dices.length ; i++){
        var result = randomNumber();
        dices[i].style.backgroundPositionX =`${result *-100 + 100}px`;
        if (i < (dices.length/2)){
            scorePlayer.push(result);
        }
        else {
            scoreDealer.push(result);
        }
    }
   scorep.textContent = `Score : ${scorePlayer.reduce((sum,current)=>sum + current)}`;
   h3.textContent = `Score : ${scoreDealer.reduce((sum,current) => sum + current)}`;
   if (scorePlayer.reduce((sum,current)=>sum + current)>scoreDealer.reduce((sum,current) => sum + current)){
       alert('Le joueur O\'clockien a gagné !');
   }
   else{
       alert('Le dealer a gagné !');
   }
}
//bonus
let titre = document.createElement('h2');
titre.textContent ='Dealer';
document.querySelector('.containerdealer').appendChild(titre);

let h3 = document.createElement('h3');
document.querySelector('.containerdealer').appendChild(h3);

let divDealer = document.createElement('div');
divDealer.className = 'board';
divDealer.id ='dealer';
document.querySelector('.containerdealer').appendChild(divDealer);

//appelle de la fonction du jeu
rollDice();