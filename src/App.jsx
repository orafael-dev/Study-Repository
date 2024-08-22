import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import './App.scss';
import { TodosContext } from './TodosContext.js';
import { useState } from 'react';

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

function App() {
  const [todos, setTodos] = useState(initialTodos)
  return (
    <>
      <main>
        <TodosContext.Provider value={{todos, setTodos}} />
        <Header appName="To-Do List with React" />

        <Home />

      </main>
    </>
  )
}

export default App
