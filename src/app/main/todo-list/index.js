import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './todo-list.css'

import Task from './task'
import { isDate } from 'date-fns'

export default class TodoList extends Component {

    static defaultProps = {
        completed: false,
        date: new Date ()
    }

    static propTypes = {
        todos: PropTypes.array,
        text: PropTypes.string,
        key: PropTypes.number,
        completed: PropTypes.bool, 
        date: isDate,
        activeStyle: PropTypes.object,
        completedStyle: PropTypes.object,
        onDeleted: PropTypes.func,
        onCompleted: PropTypes.func
    }

    render() {
        
        const elements = this.props.todos.map((item) => {

            const {key, ...itemProps} = item
    
            return (
                <Task activeStyle={this.props.activeStyle} completedStyle={this.props.completedStyle} key={key}{...itemProps} onDeleted={()=>this.props.onDeleted(key)} onCompleted={()=>this.props.onCompleted(key)}/>
            )
        })
    
        return (
            <ul className='todo-list'>
                {elements}
            </ul>
        )
    }
}
