import { createContext, useContext, useReducer } from "react";
export const TodosContext = createContext('')



const initialTodos = [
    {
      id: 0,
      title: "Do Groceries",
      description: "Buy apples, rice, juice and toilet paper.",
      isDone: true,
    },
    {
      id: 1,
      title: "Study React",
      description: "Understand context & reducers.",
      isDone: false,
    },
    {
      id: 2,
      title: "Learn Redux",
      description: "Learn state management with Redux",
      isDone: false,
    },
  ];
  
  export function TodosProvider({children}) {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    
    return (
      <>
        <main>
          <TodosContext.Provider value={{ todos, dispatch }}>
            {children}
          </TodosContext.Provider>
        </main>
      </>
    );
  }

  export function useTodos() {
    return useContext(TodosContext)
  }

 function todosReducer(todos, action) {
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
  