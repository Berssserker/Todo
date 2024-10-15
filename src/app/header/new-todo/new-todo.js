import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './new-todo.css'

export default class NewTodo extends Component {
  static propTypes = {
    taskAdd: PropTypes.func,
  }

  state = {
    text: '',
  }

  onTaskAdd = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  onSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.props.taskAdd(this.state.text)
      this.setState({
        text: '',
      })
    }
  }

  render() {
    return (
      <input
        className="new-todo"
        placeholder="How much vodka are we drinking today?"
        autoFocus
        onChange={this.onTaskAdd}
        onKeyUp={this.onSubmit}
        value={this.state.text}
      />
    )
  }
}
