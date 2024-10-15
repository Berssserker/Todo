import React, { Component } from 'react'

import './header.css'

import NewTodo from './new-todo/new-todo'

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>todos</h1>
        <NewTodo taskAdd={this.props.taskAdd} />
      </header>
    )
  }
}
