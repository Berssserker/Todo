import React, {Component} from 'react'

import './main.css'

import TodoList from './todo-list'
import Footer from './footer'

export default class Main extends Component {

    render () {
        return (
            <section className='main'>
                <TodoList editTask={this.props.editTask} activeStyle={this.props.activeStyle} completedStyle={this.props.completedStyle} todos = {this.props.todos} onDeleted = {this.props.onDeleted} onCompleted={this.props.onCompleted}/>
                <Footer deleteCompletedTasks={this.props.deleteCompletedTasks} showAllTask={this.props.showAllTask} showCompltetedTask={this.props.showCompltetedTask} showActiveTask={this.props.showActiveTask} taskLeft = {this.props.taskLeft}/>
            </section>
        )
    }

}
