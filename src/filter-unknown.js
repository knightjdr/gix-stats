import round from './helpers/round.js';

const filterUnknown = (queries) => {
  const filtered = queries.filter(query => query.known);
  return {
    known: {
      count: filtered.length,
      percentage: round((filtered.length / queries.length) * 100, 2),
    },
    queries: filtered,
    unknown: {
      count: queries.length - filtered.length,
      percentage: round(((queries.length - filtered.length) / queries.length) * 100, 2),
    },
  };
};

export default filterUnknown;
