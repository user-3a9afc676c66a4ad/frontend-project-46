let _ = require('lodash');
var numbers = [1, 2, 3, 4];
var listOfNumbers = '';
_.each(numbers, function (x) {
  listOfNumbers += x + ' ';
});
console.log(listOfNumbers);

/* :~/HEXLET/frontend-project-46$ make run                                                                                                                                   
gendiff -f 'json' './__fixtures__/file1.yml' './__fixtures__/file2.yml'                                                                                                                       
yml                                                                                                                                                                                           
[{"key":"common","children":[{"key":"follow","type":"added","value":false},{"key":"setting1","type":"unchanged","value":"Value 1"},{"key":"setting2","type":"deleted","value":200},{"key":"set
ting3","type":"changed","value1":true,"value2":null},{"key":"setting4","type":"added","value":"blah blah"},{"key":"setting5","type":"added","value":{"key5":"value5"}},{"key":"setting6","chil
dren":[{"key":"doge","children":[{"key":"wow","type":"changed","value1":"","value2":"so much"}],"type":"nested"},{"key":"key","type":"unchanged","value":"value"},{"key":"ops","type":"added",
"value":"vops"}],"type":"nested"}],"type":"nested"},{"key":"group1","children":[{"key":"baz","type":"changed","value1":"bas","value2":"bars"},{"key":"foo","type":"unchanged","value":"bar"},{
"key":"nest","type":"changed","value1":{"key":"value"},"value2":"str"}],"type":"nested"},{"key":"group2","type":"deleted","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","type":"adde
d","value":{"deep":{"id":{"number":45}},"fee":100500}}]                                                                                                                                       
ivan@ivan-VirtualBox:~/HEXLET/frontend-project-46$                                                                                                                                            
exit                                                                                                                                                                                     */
