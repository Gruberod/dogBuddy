import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import {Router} from './Components/router';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    );
  }
}

export default App;
