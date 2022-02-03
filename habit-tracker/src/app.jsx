import './app.css';
import React, {Component} from 'react';
import Habits from './components/habits'
import Navbar from './components/navbar';

class app extends Component{
  state = {
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3,name: 'Coding', count: 0},
    ],
}
handleIncrement = (habit) => {
  const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
          return {...habit, count: habit.count+1};
      }
      return item;
  })
  this.setState({habits});
}
handleDecrement = (habit) => {
  const habits = this.state.habits.map(item => {
      if(item.id === habit.id && habit.count > 0){
          return { ...habit, count: habit.count-1};
      }
      return item;
  })
  this.setState({habits});
}
handleDelete = (habit) => {
  const habits = this.state.habits.filter(item => {
      if(item.id !== habit.id){
          return {...habit}
      }
  })
  this.setState({habits});
}
handleAdd = name => {
  const habits = [...this.state.habits, {id:Date.now(), name: name, count: 0}];
  this.setState({habits: habits});
}
  render(){
    return(
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete} 
        onAdd={this.handleAdd}
        />
      </>
    );
  }
}
export default app;
