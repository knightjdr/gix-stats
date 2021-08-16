import afterCharacter from './helpers/after-character.js';

const args = () => {
  const options = {
    file: 'tracking.json',
    outFolder: 'output',
  };
  process.argv.forEach((arg) => {
    if (arg.startsWith('--file')) {
      options.file = String(afterCharacter(arg, '='));
    }
    if (arg.startsWith('--outFolder')) {
      options.outFolder = String(afterCharacter(arg, '='));
    }
  });
  return options;
};

export default args;
