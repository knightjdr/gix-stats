import fs from 'fs';

import arrToFile from './arr-to-file.js';
import yearMonthDay from './helpers/year-month-day.js';

const write = (filtered, fields, species, time, outFolder) => (
  new Promise((resolve) => {
    const date = yearMonthDay();
    const stream = fs.createWriteStream(`${outFolder}/${date}-stats.txt`, 'utf8');
    stream.write(`start\t${time.summary.start}\n`);
    stream.write(`end\t${time.summary.end}\n`);
    stream.write(`duration\t${time.summary.duration} days\n`);
    stream.write('\r\n');
    stream.write('queries\tcount\tpercentage\n');
    stream.write(`known\t${filtered.known.count}\t${filtered.known.percentage}\n`);
    stream.write(`unknown\t${filtered.unknown.count}\t${filtered.unknown.percentage}\n`);
    stream.write(`total\t${filtered.known.count + filtered.unknown.count}\n`);
    stream.write('\r\n');
    arrToFile(stream, species);
    stream.write('\r\n');
    arrToFile(stream, fields);
    stream.write('\r\nBy day\n');
    arrToFile(stream, time.day);
    stream.write('\r\nBy hour\n');
    arrToFile(stream, time.hour);
    stream.write('\r\n');
    stream.end();
    resolve();
  })
);

export default write;
