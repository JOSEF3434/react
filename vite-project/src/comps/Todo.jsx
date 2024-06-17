import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Afooter from "./Afooter"; 


export default function Todo(){
  const [todos, setTodos] = useState([]);
  const copmletedTodos = todos.filter(todos => todos.done).length;
  const totalTodos = todos.length;
  return(
    
    <div>
      <Form todos ={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
      <Afooter copmletedTodos = {copmletedTodos} totalTodos={totalTodos} />
   </div>
  );
}