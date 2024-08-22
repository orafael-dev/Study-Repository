export default function todosReducer(todos, action) {
  switch (action.type) {
    case "deleted": {
      if (confirm("Certeza que você deseja excluir?")) {
        return todos.filter((todo) => todo.id !== action.id);
      }
      break
    }

    case "toggledIsDone": {
      return todos.map((todo) => {
        if (todo.id === action.id) {
          todo.isDone = !todo.isDone;
          return todo;
        } else {
          return todo;
        }
      });
    }
  }
}
