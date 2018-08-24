import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Router} from './Components/router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import reducer from './redux/reducers'
import './App.css';

// const store = createStore(reducer)

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
