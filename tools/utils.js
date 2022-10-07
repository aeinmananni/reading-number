const jalaliMoment = require("jalali-moment");

toNormalSqlJsonText = (data) => JSON.stringify(data).replace("'", "''");

addFirstZero = (txtNum) => {
  if (typeof txtNum === "number") {
    if (txtNum < 10) {
      return `0${txtNum}`;
    } else {
      return txtNum;
    }
  } else if (typeof txtNum === "string") {
    if (txtNum.length < 2) {
      return `0${txtNum}`;
    } else {
      return txtNum;
    }
  } else return txtNum;
};

getCurrentTime = () => {
  const currentDate = new Date();
  const currentTime = `${addFirstZero(currentDate.getHours())}${addFirstZero(
    currentDate.getMinutes()
  )}${addFirstZero(currentDate.getSeconds())}`;

  return currentTime;
};

getCurrentPersianDate = () => {
  const currentDate = jalaliMoment().locale("fa").format("YYYY/M/D");

  const firstSlashIndex = currentDate.indexOf("/");
  const lastSlashIndex = currentDate.lastIndexOf("/");

  const year = currentDate.substr(0, 4);
  const month = currentDate.substr(
    firstSlashIndex + 1,
    lastSlashIndex - firstSlashIndex - 1
  );
  const day = currentDate.substr(lastSlashIndex + 1);

  return `${year}/${addFirstZero(month)}/${addFirstZero(day)}`;
};

getCurrentPersianDateWithoutSlash = () => {
  const currentDate = jalaliMoment().locale("fa").format("YYYY/M/D");

  const firstSlashIndex = currentDate.indexOf("/");
  const lastSlashIndex = currentDate.lastIndexOf("/");

  const year = currentDate.substr(0, 4);
  const month = currentDate.substr(
    firstSlashIndex + 1,
    lastSlashIndex - firstSlashIndex - 1
  );
  const day = currentDate.substr(lastSlashIndex + 1);

  return `${year}${addFirstZero(month)}${addFirstZero(day)}`;
};

slashDate = (dateTxt) => {
  return dateTxt
    ? `${dateTxt.substr(0, 4)}/${dateTxt.substr(4, 2)}/${dateTxt.substr(6)}`
    : "//";
};

colonTime = (timeTxt) => {
  let result = "::";

  if (timeTxt) {
    result = `${timeTxt.substr(0, 2)}:${timeTxt.substr(2, 2)}`;

    if (timeTxt.length === 6) {
      result += `:${timeTxt.substr(4)}`;
    }
  }

  return result;
};

generateRandomPassword = (passLength) => {
  return passGenerator.generate({
    length: passLength,
    numbers: true,
    lowercase: true,
    uppercase: false,
    symbols: false,
  });
};

module.exports = {
  toNormalSqlJsonText,
  addFirstZero,
  getCurrentTime,
  getCurrentPersianDate,
  getCurrentPersianDateWithoutSlash,
  slashDate,
  colonTime,
  generateRandomPassword,
};