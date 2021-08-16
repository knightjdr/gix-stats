const arrToFile = (stream, arr) => {
  const header = Object.keys(arr[0]).join('\t');
  stream.write(`${header}\n`);
  arr.forEach((obj) => {
    const line = Object.values(obj).join('\t');
    stream.write(`${line}\n`);
  });
};

export default arrToFile;
