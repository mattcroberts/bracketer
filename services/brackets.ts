import fauna from "faunadb";
import { bracketRecur, pairPairs, toPairs } from "./bracketUtils";
import { Bracket } from "./types";

const client = new fauna.Client({
  secret: process.env.FAUNA_ADMIN_KEY as string,
  domain: process.env.FAUNA_DB_DOMAIN as string,
});

export const createBracket = (teams: string[]): Bracket => {
  const pairs = pairPairs(teams);

  return bracketRecur(pairs, 0);
};

export const addBracket = async (name: string, teams: Array<string>) => {
  const q = fauna.query;
  await client.query(
    q.Create(q.Collection("BracketContainer"), {
      data: {
        name,
        bracketPairs: toPairs(teams).map(([teamA, teamB]) => ({
          teamA,
          teamB,
        })),
      },
    })
  );
};

export const getBracket = async (name: string) => {
  const q = fauna.query;
  const { data } = await client.query<{
    data: { bracketPairs: { teamA: string; teamB: string }[] };
  }>(q.Get(q.Match(q.Index("bracketByName"), name)));

  const bracket = bracketRecur(
    pairPairs(data.bracketPairs.map((pair) => [pair.teamA, pair.teamB])),
    0
  );

  return bracket;
};
