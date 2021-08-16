const yearMonthDay = (time) => {
  const date = time ? new Date(time) : new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export default yearMonthDay;
