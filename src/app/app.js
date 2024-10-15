import React, { Component } from 'react'

import './app.css'

import Header from './header/header'
import Main from './main/main'

export default class App extends Component {
  state = {
    todoData: [],
    activeStyle: { display: 'list-item' },
    completedStyle: { display: 'list-item' },
  }

  startKey = 0

  intervalId = null

  createTask(text) {
    return {
      text,
      key: this.startKey++,
      completed: false,
      date: new Date(),
    }
  }

  onCompleted = (key) => {
    this.setState(({ todoData }) => {
      const newData = todoData.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
      return {
        todoData: newData,
      }
    })
  }

  deleteItem = (key) => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((item) => item.key !== key)
      return {
        todoData: newData,
      }
    })
  }

  taskAdd = (text) => {
    const newTask = this.createTask(text)
    if (text.trim() !== '') {
      this.setState(({ todoData }) => {
        const newArr = [...todoData, newTask]
        return {
          todoData: newArr,
        }
      })
    } else {
      return
    }
  }

  showActiveTask = () => {
    this.setState(() => {
      return {
        activeStyle: { display: 'list-item' },
        completedStyle: { display: 'none' },
      }
    })
  }

  showCompltetedTask = () => {
    this.setState(() => {
      return {
        activeStyle: { display: 'none' },
        completedStyle: { display: 'list-item' },
      }
    })
  }

  showAllTask = () => {
    this.setState(() => {
      return {
        activeStyle: { display: 'list-item' },
        completedStyle: { display: 'list-item' },
      }
    })
  }

  deleteCompletedTasks = () => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((item) => !item.completed)
      return {
        todoData: newData,
      }
    })
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.forceUpdate()
    }, 5000) // Обновление каждую секунду
  }

  componentWillUnmount() {
    // Очищаем интервал при размонтировании компонента
    clearInterval(this.intervalId)
  }

  render() {
    const taskLeft = this.state.todoData.filter((item) => !item.completed).length + ' items left'

    return (
      <section className="todoapp">
        <Header taskAdd={this.taskAdd} />
        <Main
          deleteCompletedTasks={this.deleteCompletedTasks}
          showAllTask={this.showAllTask}
          showCompltetedTask={this.showCompltetedTask}
          showActiveTask={this.showActiveTask}
          activeStyle={this.state.activeStyle}
          completedStyle={this.state.completedStyle}
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onCompleted={this.onCompleted}
          taskLeft={taskLeft}
        />
      </section>
    )
  }
}
