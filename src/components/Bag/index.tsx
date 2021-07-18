import styles from "./styles.module.scss";
import { Card } from "../Card";
import { useState } from "react";
import { api, pokeapi } from "../../service/api";
interface IBagProps {
  name: string;
  allPokemon: IAllPokemon[];
  bag: IBag;
}
interface IAllPokemon {
  name: string;
  url: string;
}

interface IPokemon {
  name: string;
  base_experience: number;
  image: string;
}
interface IBag {
  sum_xp: number;
  pokemon: IPokemon[];
}

export function Bag({ name, allPokemon }: IBagProps) {
  const [filteredPokemon, setFilteredPokemon] = useState<IAllPokemon[]>([]);
  const [search, setSearch] = useState("");
  const [trade, setTrade] = useState<IBag>({ sum_xp: 0, pokemon: [] });

  const handleSearchPokemon = (pokemonSearch: string) => {
    let filteredPokemon = [];
    if (pokemonSearch.length > 0) {
      filteredPokemon = allPokemon.filter((pokemon: IAllPokemon) => {
        return pokemon.name.toUpperCase().includes(pokemonSearch.toUpperCase());
      });
    }
    setFilteredPokemon(filteredPokemon);
    setSearch(pokemonSearch);
  };

  const handleSelectedPokemon = async (selectedPokemon: any) => {
    if (trade.pokemon.length < 6) {
      const pokemon = await pokeapi.get(`${selectedPokemon.url}`);
      console.log("pokemon", pokemon.data);

      const pok = {
        base_experience: pokemon.data.base_experience,
        image: pokemon.data.sprites.front_default,
        name: pokemon.data.name,
      };

      const newTrade: IBag = {
        sum_xp: trade.sum_xp + pok.base_experience,
        pokemon: [...trade.pokemon, pok],
      };
      setTrade(newTrade);
      setSearch("");
      setFilteredPokemon([]);
    } else {
      alert("Número máximo de pokemon para troca atingido");
      setSearch("");
    }
  };

  return (
    <section className={styles.container}>
      <h2>
        {name}: {trade.sum_xp} XP
      </h2>
      <input
        type="search"
        onChange={(e) => handleSearchPokemon(e.target.value)}
        placeholder="Digite o nome do pokemon"
        onBlur={() => {
          setTimeout(() => {
            setFilteredPokemon([]);
          }, 100);
        }}
        value={search}
      />
      <div className={styles.filter}>
        {filteredPokemon?.map((pokemon) => (
          <div
            className={styles.filterPokemon}
            key={pokemon.name}
            onClick={(e) => handleSelectedPokemon(pokemon)}
          >
            {pokemon.name}
          </div>
        ))}
      </div>
      <div className={styles.bagCards}>
        {trade?.pokemon.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
