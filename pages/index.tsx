import type { NextPage } from "next";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <main>
      <h1>Bracketer</h1>

      <Link href="brackets/new">Create new Bracket</Link>
    </main>
  );
};

export default Home;
