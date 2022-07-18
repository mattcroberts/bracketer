type Bracket = { stageName?: string; team?: string; a?: Bracket; b?: Bracket };

export const BRACKET: Bracket = {
  stageName: "FINAL",
  team: undefined,
  a: {
    stageName: "semi1",
    team: undefined,
    a: { team: "A" },
    b: { team: "B" },
  },
  b: {
    stageName: "semi2",
    team: undefined,
    a: { team: "C" },
    b: { team: "D" },
  },
};

export const BRACKET2: Bracket = {
  stageName: "FINAL",
  team: undefined,
  a: {
    stageName: "semi1",
    team: undefined,
    a: {
      a: {
        team: "A",
      },
      b: {
        team: "B",
      },
      team: undefined,
    },
    b: {
      a: {
        team: "C",
      },
      b: {
        team: "D",
      },
      team: undefined,
    },
  },
  b: {
    stageName: "semi2",
    team: undefined,
    a: {
      a: {
        team: "E",
      },
      b: {
        team: "F",
      },
      team: undefined,
    },
    b: {
      a: {
        team: "G",
      },
      b: {
        team: "H",
      },
      team: undefined,
    },
  },
};

const X = [
  [
    [
      ["A", "B"],
      ["C", "D"],
    ],
    [
      ["E", "F"],
      ["G", "H"],
    ],
  ],
  [
    [
      ["A", "B"],
      ["C", "D"],
    ],
    [
      ["E", "F"],
      ["G", "H"],
    ],
  ],
  [
    [
      ["A", "B"],
      ["C", "D"],
    ],
    [
      ["E", "F"],
      ["G", "H"],
    ],
  ],
];
