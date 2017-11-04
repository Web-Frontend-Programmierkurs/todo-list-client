import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import './App.css'

class App extends Component {

  state = {
    items: [],
  }

  render() {
    return (
      <div className="app">
        <h1>todo list</h1>
        <CreateTodo create={this.create} />
        <TodoList
          delete={this.delete}
          items={this.state.items}
          toggle={this.toggle}
        />
      </div>
    )
  }

  create = text => {
    const newItem = {
      id: uuid(),
      text,
    }
    this.setState(state => ({
      items: [newItem, ...state.items],
    }))
  }

  delete = id => {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }))
  }

  toggle = id => {
    this.setState(state => ({
      items: state.items.map(item => {
        if (item.id !== id) return item
        return {
          ...item,
          done: !item.done,
        }
      })
    }))
  }
}

export default App
