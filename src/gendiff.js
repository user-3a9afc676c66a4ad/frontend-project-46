import { program } from 'commander';

const gendiff = (filepath1, filepath2) => `${first}${second}`;

program.name('gendiff').description('Compares two configuration files and shows a difference').version('1.0.0');

program
  .command('gendiff')
  .description('Команда  возвращает разницу между данными в виде строки')
  .argument('<filepath1>', 'первые данные')
  .argument('<filepath2>', 'вторые данные')
  .action((filepath1, filepath2) => {
    // BEGIN
    const result = gendiff(filepath1, filepath2);
    console.log(result);
    // END
  });

program.parse();

export default gendiff;

/* const makeWelcome = () => {
  console.log('Welcome to the ...!');
  const userName = 'readlineSync?';
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default makeWelcome;
*/
