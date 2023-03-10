import clipBoard from "../assets/Clipboard.svg";

import styles from "./VoidList.module.css";

export function VoidList() {
  return (
    <div className={styles.voidList}>
      <article>
        <div className={styles.clipboard}>
          <img src={clipBoard} alt="icone de prancheta" />
        </div>
        <div className={styles.voidMessage}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </article>
    </div>
  );
}