function assignments (input: string) {
  let total = 0;
  const pairsOfRanges = input.split('\n');

  const ranges = pairsOfRanges.map(x => createPairAssignment(x));

  for (let i = 0; i < ranges.length; i++) {
    total += measureAssignment(ranges[i]);
  }
  return total;
}


function createPairAssignment (str: string) {
  const pair = str.split(',').map(x => x.split('-'));
  const values = pair.map(x => {
    return [parseInt(x[0], 10), parseInt(x[1], 10)];
  });
  return values;
}


function measureAssignment (pair: number[][]) {
  let one = pair[0];
  let two = pair[1];

  if (one[0] <= two[0] && one[1] >= two[1]) {
    return 1;
  } else if (one[0] >= two[0] && one[1] <= two[1]) {
    return 1;
  }
  return 0;
}

export default assignments;
