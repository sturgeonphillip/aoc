type Rucksack = string;
type Priority = number;
type ValueTypes = {
  [Letters: string]: number;
};
export default function compartments (ruck: string) {
  let characters: ValueTypes = {};
  let half = ruck.length / 2;
  const cache: ValueTypes = {};

  let item = '';
  for (let i = 0; i < ruck.length; i++) {
    if (i < half) {
      if (!(cache[ruck])) cache[ruck[i]] = 1;
    } else {
      if (cache[ruck[i]]) {
        item = ruck[i];
      }
    }
  }
  return item;
};
