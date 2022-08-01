import { NextApiHandler } from "next";
import { FormValues } from "../../components/NewBracketForm";
import { addBracket } from "../../services/brackets";

const createBracket: NextApiHandler = async (req, res) => {
  const teamName: FormValues["name"] = req.body.name;
  const teams: FormValues["teams"] = Array.from(req.body.teams);

  if (teamName && teams.length >= 4) {
    try {
      await addBracket(
        teamName,
        teams.map((team) => team.name as string)
      );

      return res.json({
        teamName,
      });
    } catch (e) {
      console.error(e);
    }
  }
  return res.status(400).json({ error: "Bad Bracket" });
};

export default createBracket;
