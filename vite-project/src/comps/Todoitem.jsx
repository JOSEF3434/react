import styles from "./todoitem.module.css";

export default function TodoItem({item, todos,setTodos}){

  function handelDelete(item) {
    setTodos(todos.filter((todo)=>todo !==item));
  }
  function handelclick(name){
    //console.log("item text cliked",name);
    setTodos(todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo));
    //console.log(newArray);
  }
  const className = item.done ? styles.complated :"" ;
  return (
  <div className={styles.item}>
    <div className={styles.itemName}>
      <span className={className} onClick={()=>handelclick(item.name)}> 
        {item.name}
      </span> 
      <span>
          <button 
          onClick={()=> handelDelete(item)} className={styles.deletButton}>
            x
          </button>
      </span>
    </div>
    
    <hr className={styles.line}/> 
  </div>);
}