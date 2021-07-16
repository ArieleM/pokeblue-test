import styles from "./styles.module.scss";
export function Card() {
  return (
    <div className={styles.container}>
      <img src="/images/poke.svg" alt="" />
      <div>
        <div>
          <p>Nome</p>
          <p>xp</p>
        </div>
        <div>
          <p>tipo</p>
          <p>tipo</p>
        </div>
      </div>
    </div>
  );
}
