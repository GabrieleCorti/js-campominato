var bombs = [];
var difficoltà = prompt("scegli difficoltà 0 (facile), 1 (media), 2 (difficile)")
var zero = 100;
var uno = 80;
var due = 50;
//genero numeri random tutti diferenti del pc

function bombsGenerator (max){

  while(bombs.length < 16){

    var rng = Math.floor(Math.random() * (max - 1)) + 1;
    if(bombs.indexOf(rng) === -1) bombs.push(rng);

  }

}
// while(bombs.length < 16){
//
//   var rng = Math.floor(Math.random() * 100) + 1;
//   if(bombs.indexOf(rng) === -1) bombs.push(rng);
//
// }

//faccio scegliere numero
function game(number) {

  var playerNumber;
  var i = 0;
  var playerNumbers = [];

  do {

    do {

      playerNumber = parseInt( prompt("dimmi un numero da 1 a " + number) );

    } while (isNaN(playerNumber));



    if ( playerNumbers.includes(playerNumber) ){

      alert("non ripetere i numeri");
      i --;

    } else {

      playerNumbers.push(playerNumber);
      i++;

    }

  } while (!bombs.includes(playerNumber) && i < (number - 16) && !isNaN(playerNumber));

  console.log(i);
  console.log(bombs.includes(playerNumber));
  if ( bombs.includes(playerNumber) || isNaN(playerNumber) ) {

    return true;

  }

  return false;

}

// stampo vittoria o sconfitta
// if (game()) {
//    alert("hai perso");
// } else {
//   alert("hai vinto")
// }

if (difficoltà == "0"){

  bombsGenerator(zero);
  console.log(bombs);

  if (game(zero)) {
     alert("hai perso");
  } else {
    alert("hai vinto")
  }

} else if (difficoltà == "1") {

  bombsGenerator(uno);
  console.log(bombs);
  if (game(uno)) {
     alert("hai perso");
  } else {
    alert("hai vinto")
  }

} else {

  bombsGenerator(due);
  console.log(bombs);
  if (game(due)) {
     alert("hai perso");
  } else {
    alert("hai vinto")
  }

}
