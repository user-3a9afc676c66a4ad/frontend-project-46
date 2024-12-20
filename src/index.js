import path from 'path'; //resolve
import process from 'process'; //cwd
import parseFile from './parsers.js';

import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const absolutePath1 = path.resolve(process.cwd(), path.join(__dirname, '..', '__fixtures__', filepath1));
  const absolutePath2 = path.resolve(process.cwd(), path.join(__dirname, '..', '__fixtures__', filepath2));

  console.log(absolutePath1, absolutePath2);

  const json1 = JSON.stringify(absolutePath1);
  const json2 = JSON.stringify(absolutePath2);

  console.log(json1, json2);

  const text = fs.readFileSync('file.txt', 'utf8');
  console.log(text);

  const file1Data = fs.readFileSync('__fixtures__/file1.json', 'utf-8');
  const file2Data = fs.readFileSync('__fixtures__/file2.json', 'utf-8');

  const parseFile1 = JSON.parse(file1Data);
  const parseFile2 = JSON.parse(file2Data);

  return [parseFile1, parseFile2];
};

export default genDiff;
