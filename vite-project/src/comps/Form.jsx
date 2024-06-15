import { useState } from "react"
import styles from "./form.module.css";
export default function Form({todos, setTodos}) { 
  const [todo, setTodo] = useState("");
  function handle(e){
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
   return( 
   <form className={styles.todoform} onSubmit={handle}>
    <div className={styles.inputcontainer}>
    <input className={styles.modernInput}
   onChange={(e) => setTodo(e.target.value)}
   type="text" value={todo}  
   placeholder="Enter todo item..."
   />
   <button className={styles.modernbutton} type="submit">add</button>
   
    </div>
   </form>);
}