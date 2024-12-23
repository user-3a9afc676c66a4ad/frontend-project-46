import path from 'path'; // resolve
import process from 'process'; // cwd
// import parseFile from './parsers.js';
import fs from 'fs';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  console.log(absolutePath1, absolutePath2);

  const json1 = JSON.stringify(absolutePath1);
  const json2 = JSON.stringify(absolutePath2);

  console.log(json1, json2);

  const file01Data = fs.readFileSync(absolutePath1, 'utf-8');
  const file02Data = fs.readFileSync(absolutePath2, 'utf-8');

  console.log(file01Data, file02Data);

  const file1Data = fs.readFileSync('__fixtures__/file1.json', 'utf-8');
  const file2Data = fs.readFileSync('__fixtures__/file2.json', 'utf-8');

  const parseFile1 = JSON.parse(file1Data);
  const parseFile2 = JSON.parse(file2Data);

  return [parseFile1, parseFile2];
};

export default genDiff;
