import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//use rcc to enable className based component
export default class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
       <News/>
      </div>
    )
  }
}
