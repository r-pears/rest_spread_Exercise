// Refactor
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// findMin
const findMin = (...nums) => Math.min(...nums);

// mergeObjects
const mergeObjects = (firstObj, secObj) => ({ ...firstObj, ...secObj });

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((n) => n * 2),
];

// Slice and Dice!
const removeRandom = (items) => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
  let newObject = { ...obj };
  newObject[key] = val;
  return newObject;
};

const removeKey = (obj, key) => {
  let newObject = { ...obj };
  delete newObject[key];
  return newObject;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => {
  let newObject = { ...obj };
  newObject[key] = val;
  return newObject;
};
