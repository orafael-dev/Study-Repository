import { useContext } from "react";
import { TodosContext } from "../../TodosContext.js";
import Todo from "./Todo.jsx";

function TodosList() {
  const store = useContext(TodosContext);

  return (
    <>
      <div className="todos">
        {store.todos.map((todo) => (
          <Todo 
          key={todo.id} 
          todo={todo} />
        ))}
      </div>
    </>
  );
}

export default TodosList;
