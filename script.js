var bombs = [];
var difficoltà = prompt("scegli difficoltà 0 (facile), 1 (media), 2 (difficile)")
var zero = 100;
var uno = 80;
var due = 50;
//genero numeri random tutti diferenti del pc

function bombsGenerator (max){

  while(bombs.length < 16){

    var rng = Math.floor(Math.random() * (max - 1)) + 1;
    if(bombs.indexOf(rng) === -1) {bombs.push(rng);}

  }

}
// while(bombs.length < 16){
//
//   var rng = Math.floor(Math.random() * 100) + 1;
//   if(bombs.indexOf(rng) === -1) bombs.push(rng);
//
// }

//faccio scegliere numero

  var playerNumber;
  var i = 0;
  var playerNumbers = [];
  var number;

  if (difficoltà == "0"){

    number = zero;
    bombsGenerator(zero);

  } else if (difficoltà == "1") {

    number = uno;
    bombsGenerator(uno);

  } else {

    number = due;
    bombsGenerator(due);

  }

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

  if ( bombs.includes(playerNumber) || isNaN(playerNumber) ) {

    alert("Hai perso")

  } else {

    alert("Hai vinto")
  }


// stampo vittoria o sconfitta
// if (game()) {
//    alert("hai perso");
// } else {
//   alert("hai vinto")
// }
