import path from 'path'; // resolve
import process from 'process'; // cwd
import fs from 'fs';
import parseFile from './parsers.js';
import getDiff from './getDiff.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  const file1Data = fs.readFileSync(absolutePath1, 'utf-8');
  const file2Data = fs.readFileSync(absolutePath2, 'utf-8');

  const parseFile1 = parseFile(file1Data);
  const parseFile2 = parseFile(file2Data);

  const informationDiff = getDiff(parseFile1, parseFile2);

  const dataString = JSON.stringify(informationDiff, null, 2);

  return dataString;
};

export default genDiff;
