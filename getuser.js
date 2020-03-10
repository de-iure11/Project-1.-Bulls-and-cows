const readlineSync = require("readline-sync");

// Функция получает из консоли ответ пользователя и проверяет является ли он целым числом, состоящим из неповторяющихся цифр в количестве от 3 до 6.
function getUserDigit() {
  let get = true;
  while (get) {
    let ansver = readlineSync.question(`
  Введи свой ответ: `);

    if (ansver == "0") {
      return ansver;
    }

    if (+ansver == digit) {
      console.log(`
  Поздравляем, ты угадал число. Правильный ответ = ${ansver}`);
      ansver = "0";
      return ansver;
    }

    if (isNaN(ansver)) {
      console.log(
        "\n\tОшибка!\n\tОтвет не является целым числом (содержит сиволы не являющиеся числами). Попробуй еще раз."
      );
      continue;
    } else if (!Number.isInteger(+ansver)) {
      console.log(
        "\n\tОшибка!\n\tОтвет не является целым числом. Попробуй еще раз."
      );
      continue;
    } else if (ansver.length < 3) {
      console.log(
        "\n\tОшибка!\n\tОтвет состоит из мнее 3 цифр (нужно от 3 до 6). Попробуйте еще раз."
      );
      continue;
    } else if (ansver.length > 6) {
      console.log(
        "\n\tОшибка!\n\tОтвет состоит из более 6 цифр (нужно от 3 до 6). Попробуйте еще раз."
      );
      continue;
    } else {
      arrAnsver = ansver.split("");
      let result = [];
      for (let str of arrAnsver) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }
      if (result.length != arrAnsver.length) {
        console.log(`
        Ошибка!\n\tОтвет содержит повторяющиеся цифры. Попробуйте еще раз.`
        );
        continue;
      } else {
        get = false;
        return ansver;
      }
    }
  }
}

module.exports = getUserDigit;
