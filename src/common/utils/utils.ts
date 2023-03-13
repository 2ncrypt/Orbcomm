export function fn_ConvertData(inputTime, mode) {
  /*mode ko =  UTCTime to KSTTime */
  /*mode utc = KSTTime to UTCTime */
  if (Object.keys(inputTime).length) {
    const timeObj = {};
    if (mode === 'ko') {
      for (let i = 0; i < Object.keys(inputTime).length; i++) {
        const inputDate = new Date(inputTime[Object.keys(inputTime)[i]]);
        inputDate.setHours(inputDate.getHours() + 9);
        const time = inputDate.toISOString();
        timeObj[`time${i}`] = time;
      }
      return { description: 'UTCTime to KSTTime', time: timeObj };
    } else if (mode === 'utc') {
      for (let i = 0; i < Object.keys(inputTime).length; i++) {
        const inputDate = new Date(inputTime[Object.keys(inputTime)[i]]);
        inputDate.setHours(inputDate.getHours() - 9);
        const time = inputDate.toISOString();
        timeObj[`time${i}`] = time;
      }
      return { description: 'KSTTime To UTCTime', time: timeObj };
    } else {
      console.debug("Don't find mode. Input mode : ", mode);
      return { description: "Don't find mode. ", mode };
    }
  }
}
