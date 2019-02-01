import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take Out The Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Pet Cat',
        completed: false
      },
      {
        id: 3,
        title: 'Clean Kitchen',
        completed: false
      }
    ]
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  });
}

// Delete todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}


render() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>
  );
}
}

export default App;
