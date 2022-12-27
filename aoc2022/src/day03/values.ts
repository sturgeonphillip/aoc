type ValueTypes = {
  [Letter: string]: number;
};

const values: ValueTypes = {};

function createPriorityList () {
  const alpha = Array.from({ length: 26 },
    (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

  for (let i = 0; i < alpha.length; i++) {
    let letter = alpha[i];
    values[letter] = i + 1;
  }
  for (let j = 0; j < alpha.length; j++) {
    let letter = alpha[j].toUpperCase();
    let n = 27;
    values[letter] = j + n;
  }
  return values;
}

createPriorityList();
export default values;
