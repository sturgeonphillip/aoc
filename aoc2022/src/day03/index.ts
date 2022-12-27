import run from "aocrunner";
import groupsOfThree, { findCommon, Trio } from "./elfgroups.js";
import compartments from './compartments.js';
import values from './values.js';
import testCases from './testCases.js';
type Reduced = number;

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return input
    .split('\n')
    .map(x => compartments(x))
    .map(x => values[x])
    .reduce((acc, crv) => acc + crv);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const trios: Trio[] = groupsOfThree(input);
  const common = trios.map(x => findCommon(x));

  return common.reduce((acc: number | undefined, crv: number | undefined) => {
    if (acc !== undefined && crv !== undefined) {
      return acc += crv;
    }
  }, 0);
};

run({
  part1: {
    tests: [
      {
        input: testCases.testA,
        expected: 157,
      },
      {
        input: testCases.testB,
        expected: 110
      }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testCases.testC,
        expected: 92,
      },
      {
        input: testCases.testD,
        expected: 41
      }
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
