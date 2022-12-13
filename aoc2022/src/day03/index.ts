import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

type ValueTypes = {
  [Letter: string]: number;
};

const values: ValueTypes = {};



function createPriorityList () {
  let start = 0;

  const alpha = Array.from({ length: 26 },
    (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

  for (let i = 0; i < 52; i++) {
    if (i <= 25) {
      values[alpha[start]] = i + 1;
      start++;
    }

    if (i === 26) start = 0;

    if (i >= 26) {
      values[alpha[start].toUpperCase()] = i + 1;
      start++;
    }
  }

  return values;
}

createPriorityList();

console.log(values);

function findItemValue (ruck: string) {
  let item = '';
  const cache: ValueTypes = {};
  let half = ruck.length / 2;


  for (let i = 0; i < ruck.length; i++) {
    // if (ruck[i] === '' || ' ') console.log(i);
    if (i < half) {

      if (!(cache[ruck[i]])) {
        cache[ruck[i]] = 1;
      }
    } else if (cache[ruck[i]] !== undefined) {

      if (cache[ruck[i]] === 1) {
        item = ruck[i];
      }
    }
  }

  return values[item];
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const rucksacks = input.split('\n');
  let fake: any = [];
  let total = 0;
  // console.log(findItemValue(rucksacks[2]));
  rucksacks.forEach(x => {
    if (typeof findItemValue(x) !== 'number') {
      fake.push(x);
    } else
      total += findItemValue(x);
  });
  // console.log(fake);
  return total;
};




const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: `daRasiQWed
     raIcepoiIl
     doWbuTtreWWq
     QUIcHEYUCK
     moLlyringlwx`,
        expected: 147,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
