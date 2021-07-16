import styles from "./styles.module.scss";
import { Card } from "../Card";
interface IBagProps {
  name: string;
}
export function Bag({ name }: IBagProps) {
  return (
    <section className={styles.container}>
      <h2>{name}</h2>
      <input type="text" placeholder="Digite o nome do pokemon" />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
