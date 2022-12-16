import React, { Component } from 'react'
import Form from './Form'
import Tasks from './Tasks'

import './Main.css'

export default class Main extends Component {
  state = {
    tasks: [],
    newTask: '',
    index: -1,
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if (!tasks) return

    this.setState({ tasks })
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state

    // no new tasks added
    if (tasks === prevState.tasks) return

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { tasks, index } = this.state
    let { newTask } = this.state
    newTask = newTask.trim()

    // if task already exists
    if (tasks.indexOf(newTask) !== -1) return

    const newTasks = [...tasks] // newTasks array gets all values from tasks array

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      })
    } else {
      newTasks[index] = newTask

      this.setState({
        tasks: [...newTasks],
        index: -1,
      })
    }
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state

    this.setState({
      index,
      newTask: tasks[index], // when click on edit, input field gets text of edited task
    })
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state
    const newTasks = [...tasks]

    newTasks.splice(index, 1)

    this.setState({
      tasks: [...newTasks],
    })
  }

  render() {
    const { newTask, tasks } = this.state

    return (
      <div className="main">
        <div className="header">
          <img src="assets/img/logo.svg" alt="Registration Form" />
          <h1 className="title">To-Do List built with React.js</h1>
        </div>

        <Form
          newTask={newTask}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    )
  }
}
