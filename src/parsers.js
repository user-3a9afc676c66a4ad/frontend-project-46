// import fs from 'fs';

const parseFile = (fileData) => JSON.parse(fileData);

export default parseFile;

// const __filename = fileURLToPath(import.meta.url);

/* const parse = (filePath) => {
  // const __dirname = path.dirname(fileURLToPath(import.meta.url));
  // const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  // const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
  //
  const data = JSON.stringify(filePath);
  const fileData = fs.readFileSync(data, 'utf-8');
  return JSON.parse(fileData);
};

export default parse; */
// const html = fs.readFileSync(`${__dirname}/../__fixtures__/withLinks.html`, 'utf-8')

// const json = (data) => JSON.stringify(data);

/*  const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
*/
// from index.js
// const getFixturePath1 = () => path.join(__dirname, '..', '__fixtures__', filepath1);
//  const getFixturePath2 = () => path.join(__dirname, '..', '__fixtures__', filepath2);
