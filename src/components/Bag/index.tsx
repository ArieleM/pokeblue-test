import styles from "./styles.module.scss";
import { Card } from "../Card";
import { useEffect } from "react";
import { api } from "../../service/api";
interface IBagProps {
  name: string;
}
export function Bag({ name }: IBagProps) {
  return (
    <section className={styles.container}>
      <h2>{name}</h2>
      <input type="text" placeholder="Digite o nome do pokemon" />
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
