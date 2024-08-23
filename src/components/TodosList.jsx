import { useTodos } from "../../TodosContext.jsx";
import Todo from "./Todo.jsx";

function TodosList() {
  const store = useTodos();

  return (
    <>
      <div className="todos">
        {store.filteredTodos().length ? store.filteredTodos().map((todo) => (
          <Todo 
          key={todo.id} 
          todo={todo} />
          
        ))
        : 'Nenhum To Do para ser visualizado. Tente alternar os filtros ou adicionar uma nova tarefa.'
        
        }
      </div>
    </>
  );
}

export default TodosList;
