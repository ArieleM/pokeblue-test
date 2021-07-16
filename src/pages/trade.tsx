import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./trade.module.scss";
import { Bag } from "../components/Bag";
import { api } from "../service/api";

interface IAllPokemon {
  name: string;
  url: string;
}

export default function Trade() {
  const [allPokemon, setallPokemon] = useState<IAllPokemon[]>([]);
  useEffect(() => {
    api.get("pokemon/?limit=1118").then((response) => {
      setallPokemon(response.data.results);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Trade - PokeBlue</title>
      </Head>
      <main className={styles.container}>
        <Bag name="Jogador 1" allPokemon={allPokemon} />
        <button>Troca</button>
        <Bag name="Jogador 1" allPokemon={allPokemon} />
      </main>
    </>
  );
}
