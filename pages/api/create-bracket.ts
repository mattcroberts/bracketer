import { NextApiHandler } from "next";
import { addBracket } from "../../services/brackets";

const createBracket: NextApiHandler = async (req, res) => {
  const teamName: string = req.body.name;
  const teams: string[] = Array.from(req.body.team);

  if (teamName && teams) {
    const bracket = {
      name: teamName,
      teams: teams,
    };
    addBracket(teamName, teams);

    return res.redirect(`/brackets/${teamName}`);
  }
  return res.redirect("/");
};

export default createBracket;
