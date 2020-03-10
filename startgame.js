const getUserDigit = require("./getuser");
const validateAnsver = require("./validate");

function welcome(count) {
  console.log(`
  ---------- Проект 1. Быки и коровы ----------
  
    Компьютер загадал целое число из нескольких различающихся цифр (от 3 до 6).
    Сможешь угадать это число?
    У тебя есть ${count} попыток.
    (Для завершения работы программы введи 0 + Enter).`);
}

const theEnd = `\n---------- Программа завершила свою работу ----------\n`;

function startGame(numberOfAttempts, digit) {
  //пока количество попыток не изчерпано, программа будет выполняться
  while (numberOfAttempts) {
    let ansver = getUserDigit();
    //если ansver = 0, программа завершает свое работу
    if (ansver == "0") {
      console.log(theEnd);
      break;
    }
    // вызыв функции проверки ответа пользователя
    validateAnsver(ansver, digit);
    --numberOfAttempts;

    if (numberOfAttempts != 0) {
      console.log(`
  - - - Осталось ${numberOfAttempts} попыток. - - -`);
    } else {
      console.log(`
  - - - Осталось ${numberOfAttempts} попыток. Вы проиграли. - - -`);
      console.log(theEnd);
    }
  }
}

module.exports = { startGame, welcome };
