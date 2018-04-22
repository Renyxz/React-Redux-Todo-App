import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import AllTodos from '../containers/AllTodos';



class App extends Component {
  render() {
    return (
      
      <div className="container">
        
        <AddTodo />

        <AllTodos />

      </div>

    );
  }
}

export default App;
