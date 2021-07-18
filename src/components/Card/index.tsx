import styles from "./styles.module.scss";
interface PokemonProps {
  pokemon: {
    name: string;
    base_experience: number;
    image: string;
  };
}
export function Card({ pokemon }: PokemonProps) {
  return (
    <div className={styles.container} key={pokemon.name}>
      <p>{pokemon.name}</p>
      <div>
        <div>
          <img src={pokemon.image} alt="" />
          <p>{pokemon.base_experience}</p>
        </div>
      </div>
    </div>
  );
}
