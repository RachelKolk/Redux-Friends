import React, { Component } from 'react';

import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="heading">Friend Face</h1>
       <Friends />
       <CreateFriendForm />
      </div>
    );
  }
}

export default App;
