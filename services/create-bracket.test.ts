import { createBracket } from "./brackets";

describe("createBracket", () => {
  it.each([
    [["A"]],
    [["A", "B"]],
    [["A", "B", "C"]],
    [["A", "B", "C", "D"]],
    [["A", "B", "C", "D", "E"]],
    [["A", "B", "C", "D", "E", "F"]],
    [["A", "B", "C", "D", "E", "F", "G"]],
    [["A", "B", "C", "D", "E", "F", "G", "H"]],
    [["A", "B", "C", "D", "E", "F", "G", "H", "I"]],
  ])("should create a bracket from %p", (teams) => {
    console.log(teams);

    expect(createBracket(teams)).toMatchSnapshot();
  });
});
