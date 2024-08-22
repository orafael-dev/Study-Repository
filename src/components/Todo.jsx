/* eslint-disable react/prop-types */
import { useTodos } from "../../TodosContext";
import "./Todo.scss";


function Todo({ todo }) {
  const store = useTodos();

  return (
    <>
      <div className={`todo ${todo.isDone ? "done" : ""}`}>
        <button
          onClick={() =>
            store.dispatch({
              type: "deleted",
              id: todo.id,
            })
          }
          className="erase"
        >
          x erase
        </button>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <div className="task-check">
          <input
            onClick={() =>
              store.dispatch({
                type: "toggledIsDone",
                id: todo.id,
              })
            }
            type="checkbox"
            defaultChecked={todo.isDone}
          />
          <label>{!todo.isDone ? "To-Do" : "Done"}</label>
        </div>
      </div>
    </>
  );
}

export default Todo;
