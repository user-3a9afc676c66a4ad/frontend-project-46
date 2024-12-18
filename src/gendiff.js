import { program } from 'commander';

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    // BEGIN
    const diff = genDiff(filepath1, filepath2, options.format);
    console.log(diff);
    // END
  });

program.parse();

export default genDiff;

/* const makeWelcome = () => {
  console.log('Welcome to the ...!');
  const userName = 'readlineSync?';
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default makeWelcome;
*/
