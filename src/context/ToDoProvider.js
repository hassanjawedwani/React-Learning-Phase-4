import { useState } from "react";
import ToDoContext from "./ToDoContext";

const ToDoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, {id: Date.now(), text}]);
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <ToDoContext.Provider value={{todos, addTodo, removeTodo}}>
            {children}
        </ToDoContext.Provider>
    );
}

export default ToDoProvider;