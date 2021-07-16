import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - PokeBlue</title>
      </Head>
      <main className={styles.contentContainer}>
        <aside>
          <img src="/images/poke.svg" alt="Pokebola" />
        </aside>
        <aside>
          <h1>PokeBlue</h1>
          <h3>A sua calculadora de trocas.</h3>
          <p>Descubra se a troca que deseja realizar é justa!</p>
          <p>
            Cada treinador deve ofertar de 1 a 6 pokemon em cada troca. Através
            da soma das experiências de cada pokemon a PokeBlue informará se é
            uma troca justa ou não. Considerando uma margem de 7% (1% para cada
            geração), para que nenhum treinador sai perdendo!
          </p>

          <button>Começar a trocar</button>
        </aside>
      </main>
    </>
  );
}
