import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './CreateTodo.css'

class CreateTodo extends Component {

  state = {
    text: '',
  }

  render() {
    return (
      <form
        className="create-todo"
        onSubmit={this.handleSubmit}
      >
        <input
          onChange={this.handleTextChange}
          placeholder="What needs to be done?"
          type="text"
          value={this.state.text}
        />
        <button>+</button>
      </form>
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    const text = this.state.text.trim()
    if (text.length > 0) {
      this.props.create(text)
    }
    this.setState({ text: '' })
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value })
  }
}

CreateTodo.propTypes = {
  create: PropTypes.func.isRequired,
}

export default CreateTodo
