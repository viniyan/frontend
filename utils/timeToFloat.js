import moment from "moment";

function timeToFloat(timeStr) {
  const totalMinutes = moment(timeStr).hours() + moment(timeStr).minutes() / 60;
  return totalMinutes;
}

export default timeToFloat;
