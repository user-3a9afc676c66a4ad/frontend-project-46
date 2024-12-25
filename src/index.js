import path from 'path'; // resolve
import process from 'process'; // cwd
import fs from 'fs';
import parseFile from './parsers.js';
import getDiff from './getDiff.js';
import formatter from './formatters/index.js';

const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parseFile(fs.readFileSync(filepath, 'utf-8'), extractFormat(filepath));
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const parseFile1 = getData(getFullPath(filepath1));
  const parseFile2 = getData(getFullPath(filepath2));

  const informationDiff = getDiff(parseFile1, parseFile2);

  return formatter(informationDiff, formatName);
};

export default genDiff;
