import TodoList from "./components/TodoList";
import ToDoProvider from "./context/ToDoProvider";
import AddTodo from "./components/AddTodo";


const App = () => {
  return (
    <ToDoProvider>
      <div>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList/>
      </div>
    </ToDoProvider>
  );
}

export default App;