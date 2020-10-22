const newYear = new Date(2020, 12, 31, 24, 0, 0);
const startDate = new Date(2020, 11, 30, 14, 0, 0);

/**
 * @param {*} eventDate
 * @param {*} [startDate=new Date()]
 *
 * @return {
 *  years,
 *  monthes: Количество месяцев (number)
 *  days: Количество дней (number),
 *  housr,
 *  minutes,
 *  seconds,
 *  asString: (string) '1 месяц 2 часа 2 секунды'
 * }
 *
 * d.getTime()
 */
function getTimeToDate(eventDate, startDate = new Date()) {
  const getBeginningTime = new Date(0);
  const getTimeInSeconds = eventDate - startDate;
  if (getTimeInSeconds <= 0) {
    alert("дата наступила!");
  }
  const result = new Date(getTimeInSeconds);
  const wordsForTransleter = {
    years: ["год", "года", "лет"],
    months: ["месяц", "месяца", "месяцев"],
    days: ["день", "дня", "дней"],
    hours: ["час", "часа", "часов"],
    minutes: ["минута", "минут", "минут"],
    seconds: ["секунда", "секунд", "секунд"]
  };
  const arrResult = {
    years: result.getFullYear() - getBeginningTime.getFullYear(),
    months: result.getMonth() - getBeginningTime.getMonth(),
    days: result.getDate() - getBeginningTime.getDate(),
    hours: result.getHours() - getBeginningTime.getHours(),
    minutes: result.getMinutes() - getBeginningTime.getMinutes(),
    seconds: result.getSeconds() - getBeginningTime.getSeconds()
  };
  let asString = "Осталось:";
  const wordsForTransleterKeys = Object.keys(wordsForTransleter);

  for (const leftTime in arrResult) {
    if (arrResult[leftTime] != 0 && wordsForTransleterKeys.includes(leftTime)) {

      asString += " " + arrResult[leftTime] + " " + getAgeByString(
        arrResult[leftTime],
        wordsForTransleter[leftTime]
      );
    }
  }
  return asString;
  

  function getAgeByString(number, ArrVariableMeasure) {
    const numberStr = number.toString();
    const lastNumber = +numberStr[numberStr.length - 1];
    const lastTwoDigits = number % 100;

    if (lastNumber === 1 && lastTwoDigits !== 11) {
      return ArrVariableMeasure[0];
    }

    if (
      lastNumber > 1 &&
      lastNumber < 5 &&
      (lastTwoDigits <= 11 || lastTwoDigits >= 15)
    ) {
      return ArrVariableMeasure[1];
    }

    return ArrVariableMeasure[2];
  }


}

console.log(getTimeToDate(newYear, startDate));
