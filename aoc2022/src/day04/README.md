# 🎄 Advent of Code 2022 - day 4 🎄

## Info

Task description: [link](https://adventofcode.com/2022/day/4)

## Notes

### Attempts

  too low: 339, 547
  too high: 731
  unknownf : 681


```TS
function measureAssignment (pair: number[][]) {
  let one = pair[0];
  let two = pair[1];
// 731 (too high)
  if (one[0] <= two[0] && one[1] > two[1]) {
    return 1;
  } else if (one[0] < two[0] && one[1] >= two[1]) {
    return 1;
  } else if (one[0] >= two[0] && one[1]  two[1]) {
    return 1;
  } else if (one[0] > two[0] && one[1] >= two[1]) {
    return 1;
  }
  return 0;
//



}

```

...
