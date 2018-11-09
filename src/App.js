import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import TweetList from './components/TweetList';

class App extends Component {
  render() {
    return (
      <div className="app">
        App!
        <Button color="primary" variant="flat">Material button</Button>
        <TweetList/>
      </div>
    );
  }
}

export default App;
