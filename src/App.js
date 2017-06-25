import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs.js';

class App extends Component {
  constructor(props) {
    super(props)

    
    this.state = {
      activeIndex:0
    };
  }

 
  render() {
    return (
      <div>
        
      <Tabs></Tabs>
      </div>
    );
  }
}

export default App;
