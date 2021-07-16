import Head from "next/head";
import styles from "./trade.module.scss";
import { Bag } from "../components/Bag";
import { useEffect } from "react";
import { api } from "../service/api";

export default function Trade() {
  useEffect(() => {
    api.get("pokemon/?limit=1118").then((response) => {
      console.log(response.data);
    });
  }, []);
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
