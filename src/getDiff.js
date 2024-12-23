import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return `+ ${key}: ${obj2[key]}`; // Добавлено в obj2
    }

    if (!_.has(obj2, key)) {
      return `- ${key}: ${obj1[key]}`; // Удалено из obj1
    }

    if (obj1[key] !== obj2[key]) {
      return [`- ${key}: ${obj1[key]}`]; // Изменилось в obj1
      // return [`+ ${key}: ${obj2[key]}`]; // Изменилось в obj2
    }
    return key; // Не изменилось
  });

  return result;
};

export default getDiff;
