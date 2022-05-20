import React from 'react'
import { useState } from 'react'

const Todolist = () => {
    const [first, setfirst] = useState("");
    const [todo, setAddTodo] = useState([])
    const [updateBtn, setUpdateBtn] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleAddTodo = () => {
        setAddTodo([...todo, first])
        setfirst("")
    }
    const handleRemoveTodo = (index) => {
        const values = [...todo]
        values.splice(index, 1)
        setAddTodo(values)
    }
    const handleEditTodo = (index) => {
        setUpdateBtn(true)
        setEditId(index)
        setfirst(todo[index])
    }
    const handleUpdateTodo = (e) => {
        const values = [...todo];
        console.log(values[editId]);
        values[editId] = first;
        setAddTodo(values);
        setUpdateBtn(false);
        setfirst("")
    }


    return (
        <div>
            <h3 style={{ textAlign: "center" }}>THINGS TO DO</h3>
            <hr />
            <div style={{ textAlign: "center" }}>


                <input value={first} onChange={(event) => setfirst(event.target.value)} />
                {!updateBtn ? <button onClick={handleAddTodo}>ADD TASK</button> : <button onClick={(e) => handleUpdateTodo(e)}>Update Todo</button>}

                {
                    todo.map((element, index) => (
                        <div key={index}>
                            <ul>
                                <li>{element}</li>
                            </ul>
                            <button onClick={() => handleRemoveTodo(index)}>Delete Todo</button>
                            <button onClick={() => handleEditTodo(index)}>Edit Todo</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Todolist