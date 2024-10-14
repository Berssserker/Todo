import React, {Component} from "react";
import PropTypes from "prop-types";

import './footer.css'


export default class Footer extends Component {

    static propTypes = {
        taskLeft: PropTypes.string,
        showAllTask: PropTypes.func,
        showActiveTask: PropTypes.func, 
        showCompltetedTask: PropTypes.func,
        deleteCompletedTasks: PropTypes.func
    }

    state = {
        selectedFilter: 'all'
    }

    handleFilterClick = (filter) => {
        this.setState({ selectedFilter: filter });
    }

    render() {
        return (
            <footer className="footer">
                <span className="todo-count">{this.props.taskLeft}</span>
                <ul className="filters">
                    <li>
                        <button className={this.state.selectedFilter === 'all' ? 'selected' : ''} onClick={()=>{this.props.showAllTask(); this.handleFilterClick('all')}}>All</button>
                    </li>
                    <li>
                        <button className={this.state.selectedFilter === 'active' ? 'selected' : ''} onClick={()=>{this.props.showActiveTask(); this.handleFilterClick('active')}}>Active</button>
                    </li>
                    <li>
                        <button className={this.state.selectedFilter === 'completed' ? 'selected' : ''} onClick={()=>{this.props.showCompltetedTask(); this.handleFilterClick('completed')}}>Completed</button>
                    </li>
                </ul>
                <button className="clear-completed" onClick={()=>this.props.deleteCompletedTasks()}>Clear completed</button>
            </footer>
        )
    }


}
