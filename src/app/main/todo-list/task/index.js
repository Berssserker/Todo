import React, {Component} from "react";
import { formatDistanceToNow } from "date-fns";

import './task.css'

export default class Task extends Component {

    state = {
        editFilter: false,
        taskText: this.props.text
    }

    editTask = () => {
        this.setState((state) => {
            return {
                editFilter: !state.editFilter
            }
        })
    }

    editText = (e) => {
        this.setState({taskText: e.target.value})
    }

    onSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            this.setState({
                editFilter: false
            })
        }
    }

    render() {
        let className
        let style
        if (this.props.completed) {
            className = 'completed'
             style = this.props.completedStyle
        } else if (!this.props.completed) {
             style = this.props.activeStyle
        }

        return (
            <li style={style} className={!this.state.editFilter ? className : 'editing'}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={this.props.onCompleted}/>
                    <label>
                        <span className="description">{this.state.taskText}</span>
                        <span className="created">{formatDistanceToNow(this.props.date, { addSuffix: true, includeSeconds: true })}</span>
                    </label>
                    <button className="icon icon-edit" onClick={() => this.editTask()}></button>
                    <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
                </div>
                <input className="edit" type="text" value={this.state.taskText} onChange={this.editText} onKeyUp={this.onSubmit}/>
            </li>
        )
    }
    
} 
