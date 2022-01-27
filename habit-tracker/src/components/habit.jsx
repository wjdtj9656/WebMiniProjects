import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    }

    handleIncrement = () => {
        this.setState({count: this.state.count+1});
    }
    handleDecrease = () => {
        const count = this.state.count-1;

        this.setState({count: count < 0 ? 0:count});
    }
    render() {
        return (
            <li className='habit'>
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-circle"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrease}>
                <i className="fas fa-minus-circle"></i>
            </button>
            <button className="habit-button habit-delete">
                <i class="fas fa-trash-alt"></i>
            </button>
            </li>
        );
    }
}

export default Habit;