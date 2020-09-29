import React, {Component} from 'react';
import './App.css';
import LoginComp from './component/LoginComp';
import NavBar from "./component/NavBar"

class App extends Component {
  render() {
      return (
        <div>
          <NavBar />
          <LoginComp />
        </div>
      )
  }
}

export default App
