import { useState } from "react";
import AddBracket from "../../components/forms/AddBracket/AddBracket";
import styles from "./new.module.css";

const NewBracketPage = () => {
  const [noOfBrackets, setNoOfBrackets] = useState(1);
  return (
    <div>
      <h1>New Bracket</h1>

      <form action="/api/create-bracket" method="post" className={styles.form}>
        <label>
          Name <input name="name" />
        </label>

        {new Array(noOfBrackets).fill(0).map((_, index) => (
          <AddBracket key={index} />
        ))}

        <div>
          <button
            type="button"
            onClick={() => {
              setNoOfBrackets(noOfBrackets + 1);
            }}
          >
            Add Team
          </button>
        </div>

        <div>
          <button type="submit">Create Bracket</button>
        </div>
      </form>
    </div>
  );
};

export default NewBracketPage;
