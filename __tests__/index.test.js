import url from 'url';
import path, { dirname } from 'node:path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1OutputStylish = readFile('expectedResultStylish.txt');
const file1OutputPlain = readFile('expectedResultPlain.txt');
const file1OutputJson = readFile('expectedResultJson.txt');
const file1 = './__fixtures__/file1.json';
const file2 = './__fixtures__/file2.json';
const file3 = './__fixtures__/file1.yaml';
const file4 = './__fixtures__/file2.yaml';

describe('comparing  files', () => {
  test('simple using', () => {
    expect(gendiff(file1, file2)).toEqual(file1OutputStylish);
    expect(gendiff(file3, file4, 'plain')).toEqual(file1OutputPlain);
  });

  test('formats - stylish', () => {
    expect(gendiff(file1, file2, 'stylish')).toEqual(file1OutputStylish);
    expect(gendiff(file3, file4, 'stylish')).toEqual(file1OutputStylish);
  });

  test('formats - json', () => {
    expect(gendiff(file1, file2, 'json')).toEqual(file1OutputJson);
    expect(gendiff(file3, file4, 'json')).toEqual(file1OutputJson);
  });

  test('formats - plain', () => {
    expect(gendiff(file1, file2, 'plain')).toEqual(file1OutputPlain);
    expect(gendiff(file3, file4, 'plain')).toEqual(file1OutputPlain);
  });

  test('default format', () => {
    expect(gendiff(file1, file2)).toEqual(file1OutputStylish);
    expect(gendiff(file3, file4)).toEqual(file1OutputStylish);
  });
});
