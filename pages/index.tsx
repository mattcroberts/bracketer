import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
