import _ from 'lodash';

const getDiff = (object1, object2) => {
  const keys1 = _.keys(object1);
  const keys2 = _.keys(object2);
  const sortedUnicKeys = _.sortBy(_.union(keys1, keys2));

  const resultobject = sortedUnicKeys.map((key) => {
    if (!Object.hasOwn(object1, key)) {
      return { key, value: object2[key], type: 'added' };
    }

    if (!Object.hasOwn(object2, key)) {
      return { key, value: object1[key], type: 'deleted' };
    }

    if (_.isEqual(object1[key], object2[key])) {
      return { key, value: object1[key], type: 'unchanged' };
    }

    if (_.isPlainObject(object1[key]) && _.isPlainObject(object2[key])) {
      return { key, children: getDiff(object1[key], object2[key]), type: 'nested' };
    }
    return {
      key,
      value: object1[key],
      value2: object2[key],
      type: 'changed',
    };
  });
  return resultobject;
};

export default getDiff;
