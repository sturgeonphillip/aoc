import values from './values.js';
export type Trio = string[];
export type Common = {
  [Item: string]: string;
};


export default function groupsOfThree (items: string): Trio[] {
  const elves: string[] = items.split('\n');
  const trios: Trio[] = [];
  let i = 0;

  for (let j = 0; j < elves.length; j += 3) {
    const sub: Trio = [];
    sub.push(elves[j]);
    sub.push(elves[j + 1]);
    sub.push(elves[j + 2]);
    trios.push(sub);
  }
  return trios;
}


export function findCommon (three: Trio) {
  const common: Common = {};
  const [a, b, c] = three;
  for (let i = 0; i < a.length; i++) {
    let item = a[i];
    if (!common[item]) common[item] = item;
  }

  for (let char in common) {
    if (!b.includes(char) || !c.includes(char)) {
      delete common[char];
    } else {
      return values[common[char]];
    }
  }
}


export function prioritySums (items: number[]) {

}
