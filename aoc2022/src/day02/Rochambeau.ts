// types
export type Hand = string;

export type CheatSheet = {
  [Elf: Hand]: {
    [Me: Hand]: Result;
  };
};

type Point = number;
type Result = string;
type ShapeType = {
  [Me: Hand]: Point;
};

// cheat sheets and point values
export const shapes: ShapeType = {
  'X': 1,
  'Y': 2,
  'Z': 3,
  'rock': 1,
  'paper': 2,
  'scissors': 3
};

export const score: ShapeType = {
  'X': 0,
  'Y': 3,
  'Z': 6,
  'lose': 0,
  'draw': 3,
  'win': 6
};

export const play: CheatSheet = {
  'A': {
    'X': 'draw',
    'Y': 'win',
    'Z': 'lose'
  },
  'B': {
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win'
  },
  'C': {
    'X': 'win',
    'Y': 'lose',
    'Z': 'draw'
  }
};

export const outcome: CheatSheet = {
  'A': {
    'X': 'scissors',// 'lose',
    'Y': 'rock',// 'draw',
    'Z': 'paper',// 'win'
  },
  'B': {
    'X': 'rock', // 'lose',
    'Y': 'paper', // 'draw',
    'Z': 'scissors'  // 'win'
  },
  'C': {
    'X': 'paper',
    'Y': 'scissors',
    'Z': 'rock'
  }

};
