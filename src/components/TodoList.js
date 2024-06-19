import { useContext } from "react";
import ToDoContext from "../context/ToDoContext";
import TodoItem from "./TodoItem";


const TodoList = () => {
    const {todos} = useContext(ToDoContext)
    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoItem  key={todo.id} todo={todo} />
                ))
            }
        </ul>
    );
}

export default TodoList;