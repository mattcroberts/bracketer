export enum Branch {
  A = "A",
  B = "B",
}

export type Bracket = {
  stageName?: string;
  team: string | null;
  [Branch.A]?: Bracket;
  [Branch.B]?: Bracket;
};
