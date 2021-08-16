import round from './helpers/round.js';

const species = {
  'Arabidopsis thaliana': 0,
  'Caenorhabditis elegans': 0,
  'Danio rerio': 0,
  'Dictyostelium discoideum': 0,
  'Drosophila melanogaster': 0,
  'Escherichia coli (K12)': 0,
  'Gallus gallus': 0,
  'Homo sapiens': 0,
  'Mus musculus': 0,
  'Saccharomyces cerevisiae': 0,
  'Salmonella Typhimurium (LT2)': 0,
  'Schizosaccharomyces pombe': 0,
  'Xenopus laevis': 0,
};

const summarizeSpecies = (queries) => {
  const summarized = queries.reduce((accum, query) => {
    accum[query.species] += 1;
    return accum;
  }, species);
  return Object.entries(summarized).reduce((accum, [key, value]) => ([
    ...accum,
    {
      species: key,
      count: value,
      percentage: round((value / queries.length) * 100, 2),
    },
  ]), []);
};

export default summarizeSpecies;
