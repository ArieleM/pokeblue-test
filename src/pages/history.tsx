import { GetServerSideProps, GetStaticProps } from "next";
import axios from "axios";
import Head from "next/head";
import { api } from "../service/api";
import { useEffect, useState } from "react";
interface IBag {
  sum_experience: number;
  pokemon: [{ name: string; base_experience: number }];
}

interface ITrades {
  ts: string;
  data: {
    status: string;
    bags: IBag[];
  };
}

interface HistoryProps {
  allTrades: ITrades[];
}

export default function History() {
  const [trades, setTrades] = useState([]);
  useEffect(() => {
    api.get("history").then((response) => {
      setTrades(response.data.data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Histórico - PokeBlue</title>
      </Head>
      <main>
        <h1>Histórico de trocas</h1>
        {trades?.map((trade) => (
          <div key={trade.ts}>
            <p>
              Realizada em:{" "}
              {new Intl.DateTimeFormat("pt-BR", {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(Number(trade.ts) / 1000)}
            </p>
            <div style={{ display: "flex" }}>
              {trade.data.bags?.map((bag, index) => (
                <div style={{ border: "1px solid black" }} key={index}>
                  <p>{bag.sum_experience}</p>
                  <div style={{ display: "flex" }}>
                    {bag.pokemon?.map((pokemon) => (
                      <div key={pokemon.name}>
                        <li>{pokemon.base_experience}</li>
                        <li>{pokemon.name}</li>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await axios.get("http://localhost:3000/api/history");
//   const allTrades: ITrades[] = await response.data.data;
//   return {
//     props: {
//       allTrades,
//     },
//   };
// };
