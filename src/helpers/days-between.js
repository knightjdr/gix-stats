// Calculates the number of days between to dates.

const daysBetween = (startDate, endDate) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (endDate - startDate) / millisecondsPerDay;
};

export default daysBetween;
