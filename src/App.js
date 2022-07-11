import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoDisplay from "./components/TodoDisplay";
import TodoBoard from "./components/TodoBoard";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoBoard />
    </div>
  );
}

export default App;
