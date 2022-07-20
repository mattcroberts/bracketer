import { NextApiHandler } from "next";
import { addBracket } from "../../services/brackets";

const createBracket: NextApiHandler = async (req, res) => {
  const teamName: string = req.body.name;
  const teams: string[] = Array.from(req.body.team);

  if (teamName && teams) {
    try {
      await addBracket(teamName, teams);

      return res.redirect(`/brackets/${teamName}`);
    } catch (e) {
      console.error(e);
    }
  }
  return res.redirect("/");
};

export default createBracket;
