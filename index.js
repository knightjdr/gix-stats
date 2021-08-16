/* eslint no-console: 0 */

import args from './src/args.js';
import byDate from './src/by-date.js';
import filterUnknown from './src/filter-unknown.js';
import readJson from './src/helpers/read-json.js';
import summarizeFields from './src/summarize-fields.js';
import summarizeSpecies from './src/summarize-species.js';
import write from './src/write.js';

const options = args();

const main = async () => {
  try {
    const queries = await readJson(options.file);
    const filtered = filterUnknown(queries);
    const fields = summarizeFields(filtered.queries);
    const species = summarizeSpecies(filtered.queries);
    const time = byDate(filtered.queries);
    await write(filtered, fields, species, time, options.outFolder);
  } catch (error) {
    console.log(error.toString());
  }
};

main();
