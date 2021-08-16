import fs from 'fs/promises';

const readJson = async (file) => {
  const data = await fs.readFile(file, 'utf8');
  return JSON.parse(data);
};

export default readJson;
