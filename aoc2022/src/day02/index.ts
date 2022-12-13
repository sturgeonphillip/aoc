import run from "aocrunner";
import type { Hand, CheatSheet } from './Rochambeau.js';
import { play, outcome, shapes, score } from './Rochambeau.js';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total: number = 0;

  const rounds = input
    .split('\n')
    .map((x) => x.split(' '));

  for (let i = 0; i < rounds.length; i++) {
    const elf: Hand = rounds[i][0];
    const me: Hand = rounds[i][1];

    total += shapes[me];
    total += score[play[elf][me]];
  }

  return total;
};


const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total: number = 0;

  const rounds = input
    .split('\n')
    .map((x) => x.split(' '));

  for (let i = 0; i < rounds.length; i++) {
    const elf: Hand = rounds[i][0];
    const result: Hand = rounds[i][1];

    total += shapes[outcome[elf][result]];
    total += score[result];
  }

  return total;
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
