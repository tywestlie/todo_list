import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take Out The Trash',
        complete: false
      },
      {
        id: 2,
        title: 'Pet Cat',
        complete: false
      },
      {
        id: 3,
        title: 'Clean Kitchen',
        complete: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
