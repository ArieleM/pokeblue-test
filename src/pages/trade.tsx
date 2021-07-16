import Head from "next/head";
import styles from "./trade.module.scss";
import { Bag } from "../components/Bag";

export default function Trade() {
  return (
    <>
      <Head>
        <title>Trade - PokeBlue</title>
      </Head>
      <main className={styles.container}>
        <Bag name="Jogador 1" />
        <button>Troca</button>
        <Bag name="Jogador 1" />
      </main>
    </>
  );
}
