import Head from "next/head";
import styles from "./trade.module.scss";
import { Bag } from "../components/Bag";
import { pokeapi } from "../service/api";
import { GetStaticProps } from "next";

interface IAllPokemon {
  name: string;
  url: string;
}

interface TradeProps {
  allPokemon: IAllPokemon[];
}
export default function Trade({ allPokemon }: TradeProps) {
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await pokeapi.get("pokemon/?limit=1118");
  const allPokemon: IAllPokemon[] = await response.data.results;

  return {
    props: {
      allPokemon,
    },
  };
};
