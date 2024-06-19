import { useContext } from "react";
import ToDoContext from "../context/ToDoContext";

const TodoItem = ({todo}) => {
    const {removeTodo} = useContext(ToDoContext);
    return (
        <li>
            {todo.text}
            <button type="button" onClick={()=>removeTodo(todo.id)}>Remove</button>
        </li>
    )
}

export default TodoItem;