import React from 'react';
import TodoList from './componenets/TodoList';
import ToDoForm from './components/TodoForm';

const toDo = [
  {
    task: 'Cook Dinner',
    id: 1,
    completed: false
  },
  {
    task: 'Play Guitar',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDo,
    };
  }

  toggleItem = (clickedItem) => {
    this.setState({
      toDo: this.state.toDo.map((item) => {
        if(item.id === clickedItem) {
          return (
            ...item,
            completed: !item.completed,
          )
        } else {
          return item;
        }
      }),
    });
  };

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDo: [...this.state.toDo, newItem]
    });
  };

  clearItem = () => {
    this.setState({
      toDo: this.state.toDo.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <TodoList toDo={this.state.toDo} toggleItem={this.toggleItem} clear={this.clearItem}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;