const getRandomInt = require("./getrandom");
const { welcome, startGame } = require("./startgame");

function run(numberOfAttempts) { // аргумент umberOfAttempts - количство попыток на отгадываие числа
  welcome(numberOfAttempts);
  let digit = getRandomInt(3, 6);
  //console.log(digit); // число загаданное компьютером
  startGame(numberOfAttempts, digit);
}

run(5); // в качестве аргумента передается количесво попыток
