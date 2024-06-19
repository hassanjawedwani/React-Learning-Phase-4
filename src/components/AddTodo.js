import { useContext, useState } from "react";
import ToDoContext from "../context/ToDoContext";

const AddTodo = () => {
    const [text, setText] = useState('');
    const {addTodo} = useContext(ToDoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add new task"
                value={text}
                onChange={(e)=>{setText(e.target.value)}} 
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;