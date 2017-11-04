import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Timestamp from './Timestamp'
import './Todo.css'

function Todo(props) {
  const className = classnames('todo', { 'todo--done': props.done })
  return (
    <label className={className}>
      <input
        className="todo__tick"
        defaultChecked={props.done}
        onChange={() => props.setDone(!props.done)}
        type="checkbox"
      />
      <span className="todo__text">{props.text}</span>
      <span className="todo__timestamp"><Timestamp>{props.timestamp}</Timestamp></span>
      <button className="todo__delete" onClick={() => props.delete()}>X</button>
    </label>
  )
}

Todo.propTypes = {
  delete: PropTypes.func.isRequired,
  done: PropTypes.bool,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  setDone: PropTypes.func.isRequired,
}

export default Todo
