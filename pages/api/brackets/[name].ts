import { NextApiHandler } from "next";
import { getBracket } from "../../../services/brackets";

const getBracketHandler: NextApiHandler = async (req, res) => {
  const bracketName = req.query.name;

  if (typeof bracketName === "string") {
    try {
      const bracket = await getBracket(bracketName);

      return res.status(200).json(bracket);
    } catch (e) {
      console.error(e);
    }
  }

  return res.status(404).send("Not Found");
};

export default getBracketHandler;
