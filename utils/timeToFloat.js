import moment from "moment";

function timeToFloat(timeStr) {
  const totalMinutes = moment(timeStr).hours() + moment(timeStr).minutes() / 60;
  return totalMinutes;
}

console.log(timeToFloat("2:30:00"));

export default timeToFloat;
