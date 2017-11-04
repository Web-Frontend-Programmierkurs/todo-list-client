import PropTypes from 'prop-types'
import React from 'react'
import Todo from './Todo'
import './TodoList.css'

function TodoList(props) {
  if (props.items.length === 0) {
    return (
      <div className="todo-list todo-list--empty">
        TODO: Add things to do! (-;
      </div>
    )
  }
  const items = [...props.items]
  items.sort(compareItems)
  return (
    <ul className="todo-list">
      {items.map(todo => (
        <li key={todo.id}>
          <Todo
            {...todo}
            delete={() => props.delete(todo.id)}
            setDone={done => props.setDone(todo.id, done)}
          />
        </li>
      ))}
    </ul>
  )
}

function compareItems(a, b) {
  return (a.done ? 1 : 0) - (b.done ? 1 : 0)
}

TodoList.propTypes = {
  delete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool,
    id: PropTypes.string.isRequired,
  })),
  setDone: PropTypes.func.isRequired,
}

export default TodoList
