import styles from "./footer.module.css"
export default function Afooter({copmletedTodos, totalTodos}){
  return(
  <div className={styles.footer}>
  <span className={styles.item}>complated todos: {copmletedTodos}</span>
  <span className={styles.item}>total todos: {totalTodos}</span>
  </div>);
}