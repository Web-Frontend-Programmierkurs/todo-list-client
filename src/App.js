import React from 'react'
import * as API from './API'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import './App.css'

const POLL_INTERVAL = 5000

class App extends React.Component {

  state = {
    items: [],
  }

  async componentDidMount() {
    this.pollTimer = setTimeout(this.poll, 0)
  }

  poll = async () => {
    const items = await API.getTodos()
    this.setState({ items })
    if (this.pollTimer) {
      this.pollTimer = setTimeout(this.poll, POLL_INTERVAL)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.pollTimer)
    this.pollTimer = undefined
  }

  render() {
    return (
      <div className="app">
        <h1>todo list</h1>
        <CreateTodo create={this.create} />
        <TodoList
          delete={this.delete}
          items={this.state.items}
          setDone={this.setDone}
        />
      </div>
    )
  }

  create = async (text) => {
    const newItem = await API.createTodo({ text })
    this.setState(state => ({
      items: [newItem, ...state.items],
    }))
  }

  delete = id => {
    API.deleteTodo(id)
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }))
  }

  setDone = (id, done) => {
    this.update(id, { done })
  }

  update = async (id, data) => {
    const updatedItem = await API.updateTodo(id, data)
    this.setState(state => ({
      items: state.items.map(item => item.id === id ? updatedItem : item)
    }))
  }
}

export default App
