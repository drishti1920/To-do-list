import React from 'react'

const TodoList = ({todos,handleStatus,handleEdit,handleDelete}) => {
  return (
    <ul className="allTodos">
    {todos.map((t) => (
      <li className={`singleTodo ${t.status ? "checked" : "notchecked"}`}>
        <p className="todoText">
          <span>
            {" "}
            <input type="checkbox" onChange={() => handleStatus(t.id)} />
            {t.todo}
          </span>
        </p>
        <div>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>

  )
}

export default TodoList