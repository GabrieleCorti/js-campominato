var bombs = [];


//genero numeri random tutti diferenti del pc
while(bombs.length < 16){

  var rng = Math.floor(Math.random() * 100) + 1;
  if(bombs.indexOf(rng) === -1) bombs.push(rng);

}
console.log(bombs);
//faccio scegliere numero
function game() {

  var playerNumber;
  var i = 0;

  do {

  playerNumber = parseInt( prompt("dimmi un numero da 1 a 100") );
  i ++;

} while (!bombs.includes(playerNumber) && i < 84 && !isNaN(playerNumber));

  if ( bombs.includes(playerNumber) ) {
    alert("hai perso");
  } else if (i = 83) {
    alert("hai vinto")
  }

}
game();
// if (game()) {
//   alert("hai perso");
// }
