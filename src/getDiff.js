import _ from 'lodash';

const getDiff = (object1, object2) => {
  const keys = Object.keys({ ...object1, ...object2 });
  const checkElement = (key, obj1, obj2) => {
    if (!Object.keys(obj1).includes(key)) return { status: 'added', newValue: obj2[key] };
    if (!Object.keys(obj2).includes(key)) return { status: 'deleted', oldValue: obj1[key] };

    if (!(_.isObject(obj1[key]) && _.isObject(obj2[key]))) {
      if (obj1[key] === obj2[key]) return { status: 'unchanged', oldValue: obj1[key] };

      return { status: 'changed', oldValue: obj1[key], newValue: obj2[key] };
    }
    const sortedChildren = _.sortBy(getDiff(obj1[key], obj2[key]), ['name']);
    return { status: 'has children', children: sortedChildren };
  };
  const result = keys.reduce((acc, key) => {
    const info = checkElement(key, object1, object2);
    const element = { name: key, ...info };
    return [...acc, element];
  }, []);
  return _.sortBy(result, ['name']);
};

export default getDiff;
