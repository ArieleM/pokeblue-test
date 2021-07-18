import Head from "next/head";
import styles from "./trade.module.scss";
import { Bag } from "../components/Bag";
import { pokeapi } from "../service/api";
import { GetStaticProps } from "next";
import { useState } from "react";

interface IAllPokemon {
  name: string;
  url: string;
}

interface TradeProps {
  allPokemon: IAllPokemon[];
}
export default function Trade({ allPokemon }: TradeProps) {
  const [bags, setBags] = useState<any>([]);
  const [bag1, setBag1] = useState<any>("");
  const [bag2, setBag2] = useState<any>("");

  // const handleTrade = () => {
  //   if (bags === 0) {
  //     return toast.error("Adicione pelo menos 1 pokemon para troca");
  //   }
  //   toast.warning("Voce realizará uma troca");
  // };

  return (
    <>
      <Head>
        <title>Trade - PokeBlue</title>
      </Head>
      <main className={styles.container}>
        <Bag name="Bag 1" allPokemon={allPokemon} bag={bags[0]} />
        <button>Troca</button>
        <Bag name="Bag 2" allPokemon={allPokemon} bag={bags[1]} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await pokeapi.get("pokemon/?limit=1118");
  const allPokemon: IAllPokemon[] = await response.data.results;

  return {
    props: {
      allPokemon,
    },
    revalidate: 60 * 60 * 24,
  };
};
