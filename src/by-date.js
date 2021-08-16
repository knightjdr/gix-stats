import daysBetween from './helpers/days-between.js';
import round from './helpers/round.js';
import yearMonthDay from './helpers/year-month-day.js';

const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const mongoTimestamp = id => (
  id.toString().substring(0, 8)
);

const addDate = (queries) => (
  queries.map(query => new Date(parseInt(mongoTimestamp(query._id.$oid), 16) * 1000))
);

/* Sum the total number of requests for each day of the week. The persecond
** rate is divived by the number of weeks the data comprises to get the average
** persecond rate for each day. */
const byDay = (dates, noWeeks) => {
  const daySummary = new Array(7).fill(0);
  const summary = dates.reduce((accum, date) => {
    const day = date.getDay();
    accum[day]++;
    return accum;
  }, daySummary);
  return summary.map((day, index) => ({
    day: dayIndex[index],
    count: day,
    percentage: round((day / dates.length) * 100, 2),
    persecond: round(day / (86400 * noWeeks), 2),
  }));
};

/* Sum the total number of requests for each hour of the day. The persecond
** rate is divived by the number of days the data comprises to get the average
** persecond rate for each hour. */
const byHour = (dates, noDays) => {
  const hourSummary = new Array(24).fill(0);
  const summary = dates.reduce((accum, date) => {
    const hour = date.getHours();
    accum[hour]++;
    return accum;
  }, hourSummary);
  return summary.map((hour, index) => ({
    hour: index,
    count: hour,
    percentage: round((hour / dates.length) * 100, 2),
    persecond: round(hour / (3600 * noDays), 2),
  }));
};

const byDate = (queries) => {
  const dates = addDate(queries);
  const noDays = round(daysBetween(new Date(dates[0]), new Date(dates[dates.length - 1])), 2);
  const noWeeks = Math.ceil(noDays / 7);
  return {
    day: byDay(dates, noWeeks),
    hour: byHour(dates, Math.ceil(noDays)),
    summary: {
      duration: noDays,
      end: yearMonthDay(dates[dates.length - 1]),
      start: yearMonthDay(dates[0]),
    },
  };
};

export default byDate;
