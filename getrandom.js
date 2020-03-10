// Функция генерирует число из нескольких различающихся цифр (от 3 до 6)
function getRandomInt(min, max) {
  //произвольно определяем количество цифр в числе (от 3 до 6)
  numberOfDigits = Math.floor(min + Math.random() * (max + 1 - min));
  // создаем масив неповторяющихся цифр, из которых будет составлено число (массив с числами от 0 до 9)
  arrDigit = [];
  for (let i=0; i<10; ++i) {
    arrDigit.push(i);
  }
  // создаем пустую строку, в которую будет записано число длины, равном значению numberOfDigits
  digit = "";
  while (digit.length < numberOfDigits) {
    // определяем произвольный индекс элемента из массива arrDigit
    minIndex = 0;
    maxIndex = arrDigit.length - 1;
    index = Math.floor(minIndex + Math.random() * (maxIndex + 1 - minIndex));
    if (digit == "" && arrDigit[index] == 0) {
      // пропускаем на случай если число будет состоять из 3 цифр и первая цифра будет равна 0 (чтобы при приведении digit к целому числу не получить двухзначное число)
      continue;
    } else {
      digit += arrDigit[index];
      arrDigit.splice(index, 1);
    }
  }
  // преобразуем digit в число и возвращаем
  return +digit;
}

module.exports = getRandomInt;
