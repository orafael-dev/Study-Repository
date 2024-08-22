import { useTodos } from "../../TodosContext.jsx";
import Todo from "./Todo.jsx";

function TodosList() {
  const store = useTodos();

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
