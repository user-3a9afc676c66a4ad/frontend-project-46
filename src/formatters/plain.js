import _ from 'lodash';

const stringify = (item) => {
  if (_.isObject(item)) return '[complex value]';
  if (typeof item === 'string') return `'${item}'`;
  return String(item);
};

const plain = (tree, path) => {
  const result = tree.reduce((acc, item) => {
    const name = path ? `${path}.${item.name}` : `${item.name}`;
    if (item.status === 'added') return [...acc, `Property '${name}' was added with value: ${stringify(item.newValue)}`];
    if (item.status === 'deleted') return [...acc, `Property '${name}' was removed`];
    if (item.status === 'changed') return [...acc, `Property '${name}' was updated. From ${stringify(item.oldValue)} to ${stringify(item.newValue)}`];
    if (item.status === 'unchanged') return acc;

    return [...acc, `${plain(item.children, `${name}`)}`];
  }, []);
  const joinedResult = result.join('\n');
  return joinedResult;
};
export default plain;
