// Функция проверяет результат ответа на совпадение
function validateAnsver(ansver, digit) {
  ansver = ansver.toString().split("");
  digit = digit.toString().split("");

  inPlase = 0; // счетчик цифр на своем месте
  notInPlase = 0; // счетчик совпавших цифр не на своем месте
  itemInPlase = []; // массив цифр на своем месте
  itemNotInPlase = []; // массив совпавших цифр не на своем месте

  ansver.forEach((item, index) => {
    if (digit.includes(item) && ansver[index] == digit[index]) {
      ++inPlase;
      itemInPlase.push(item);
    } else if (digit.includes(item) && ansver[index] != digit[index]) {
      ++notInPlase;
      itemNotInPlase.push(item);
    }
  });

  console.log(`
  Ответ: совпавших цифр не на своих местах - ${notInPlase} (${itemNotInPlase.join(
    " и "
  )}), цифр на своих местах - ${inPlase} (${itemInPlase.join(" и ")})`);
}

module.exports = validateAnsver;
