import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const elf = (str: string) => {
  return str.split('\n')
    .map(x => parseInt(x, 10))
    .reduce((arr, crv) => arr + crv);
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n\n');

  const elves = input.map((x) => elf(x));

  return elves.sort((a, b) => {
    return b - a;
  })[0];
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split('\n\n')
    .map((x) => {
      return x.split('\n')
        .map(x => parseInt(x, 10))
        .reduce((arr, crv) => arr + crv);
    })
    .sort((a, b) => b - a);

  const top = input
    .slice(0, 3)
    .reduce((acc, crv) => acc + crv);
  return top;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
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
