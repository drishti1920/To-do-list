import React from 'react'

const TodoForm = ({handleSubmit,todo,setTodo,editId}) => {

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Enter task"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    />
    <button type="submit">{editId ? "Edit" : "Go"}</button>
  </form>

  )
}

export default TodoForm