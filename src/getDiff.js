import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const result = {};
  keys.forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      result[`+ ${key}: ${obj2[key]}`] = 'null'; // Добавлено в obj2
    } else if (!Object.hasOwn(obj2, key)) {
      result[`- ${key}: ${obj1[key]}`] = null; // Удалено из obj1
    } else if (obj1[key] !== obj2[key]) {
      result[`- ${key}: ${obj1[key]}`] = null; // Изменилось в obj1
      result[`+ ${key}: ${obj2[key]}`] = null; // Изменилось в obj2
    } else {
      result[key] = obj1[key]; // Не изменилось
    }
  });
  return result;
};

export default getDiff;
