import _ from 'lodash';

const getIndent = (depth, additionalSpaces = 0) => ' '.repeat(depth * 2 + additionalSpaces);

const styleValue = (itemValue, oldDepth) => {
  if (!_.isObject(itemValue) || itemValue === null) return `${itemValue}`;
  const levelIndent = getIndent(oldDepth, 4);
  const closeIndent = getIndent(oldDepth, 2);
  let result = '{';
  const entries = Object.entries(itemValue);
  result += entries.reduce((acc, [key, value]) => {
    const stringifyValue = typeof value === 'object' && value !== null ? styleValue(value, oldDepth + 2) : value;
    return `${acc}\n${levelIndent}  ${key}: ${stringifyValue}`;
  }, '');
  result += `\n${closeIndent}}`;

  return result;
};

const stylish = (tree) => {
  const stringifyWithDepth = (node, depth) => {
    const levelIndent = getIndent(depth);
    const closeIndent = getIndent(depth, -2);
    const result = '{';
    // prettier-ignore
    const body = node.reduce((acc, {
      name, status, oldValue, newValue, children,
    }) => {
      if (status === 'added') return `${acc}\n${levelIndent}+ ${name}: ${styleValue(newValue, depth)}`;
      if (status === 'deleted') return `${acc}\n${levelIndent}- ${name}: ${styleValue(oldValue, depth)}`;
      if (status === 'unchanged') return `${acc}\n${levelIndent}  ${name}: ${styleValue(oldValue, depth)}`;
      if (status === 'changed') return `${acc}\n${levelIndent}- ${name}: ${styleValue(oldValue, depth)}\n${levelIndent}+ ${name}: ${styleValue(newValue, depth)}`;

      return `${acc}\n${levelIndent}  ${name}: ${stringifyWithDepth(children, depth + 2)}`;
    }, '');
    return `${result}${body}\n${closeIndent}}`;
  };
  return stringifyWithDepth(tree, 1);
};

export default stylish;
