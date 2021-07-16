import styles from "./styles.module.scss";
import { Card } from "../Card";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
interface IBagProps {
  name: string;
  allPokemon: IAllPokemon[];
}
interface IAllPokemon {
  name: string;
  url: string;
}

interface Pokemon {
  name: string;
  base_experience: number;
  image: string;
}

export function Bag({ name, allPokemon }: IBagProps) {
  const [filteredPokemon, setFilteredPokemon] = useState<IAllPokemon[]>([]);
  const [search, setSearch] = useState("");

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
  return (
    <section className={styles.container}>
      <h2>{name}</h2>
      <input
        type="search"
        onChange={(e) => handleSearchPokemon(e.target.value)}
        placeholder="Digite o nome do pokemon"
      />
      <div className={styles.filter}>
        {filteredPokemon?.map((pokemon) => (
          <div className={styles.filterPokemon} key={pokemon.name}>
            {pokemon.name}
          </div>
        ))}
      </div>
      <div className={styles.bagCards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
