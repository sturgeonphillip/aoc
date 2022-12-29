export default function assignments (fn: (pair: number[][]) => number, input: string) {
  let total = 0;

  const ranges = input.split('\n').map(x => createPairAssignment(x));

  for (let i = 0; i < ranges.length; i++) {
    total += fn(ranges[i]);
  }
  return total;
}


export function measureAssignment (pair: number[][]) {
  let a = pair[0];
  let b = pair[1];

  if (a[0] <= b[0] && b[1] <= a[1]) {
    return 1;
  } else if (b[0] <= a[0] && a[1] <= b[1]) {
    return 1;
  }
  return 0;
}


export function measureOverlap (pair: number[][]) {
  let a = pair[0];
  let b = pair[1];

  if (a[0] <= b[0] && a[1] >= b[0]) {
    return 1;
  } else if (b[0] <= a[0] && b[1] >= a[0]) {
    return 1;
  }
  return 0;
}


function createPairAssignment (str: string) {
  const pair = str.split(',').map(x => x.split('-'));
  const values = pair.map(x => {
    return [parseInt(x[0], 10), parseInt(x[1], 10)];
  });
  return values;
}
