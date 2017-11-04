import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './Todo.css'

function Todo(props) {
  const className = classnames('todo', { 'todo--done': props.done })
  return (
    <label className={className}>
      <input
        defaultChecked={props.done}
        onChange={() => props.toggle()}
        type="checkbox"
      />
      <span>{props.text}</span>
      <button onClick={() => props.delete()}>X</button>
    </label>
  )
}

Todo.propTypes = {
  delete: PropTypes.func.isRequired,
  done: PropTypes.bool,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default Todo
