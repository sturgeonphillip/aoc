import run from "aocrunner";
import assignments, { measureAssignment, measureOverlap } from './assignments.js';
import cases from './tests.js';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const result = assignments(measureAssignment, input);
  return result;

};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const result = assignments(measureOverlap, input);
  return result;
};

run({
  part1: {
    tests: [
      {
        input: cases.A.in,
        expected: cases.A.expect
      }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: cases.B.in,
        expected: cases.B.expect,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
