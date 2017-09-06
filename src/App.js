import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from "./Keypad.js"
import Display from "./Display.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      display: "",
      math:[]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <Display info={this.state.display} />
          <Keypad display={this._display} clear={this._clear} opperand={this._opperand} equals={this._equals}/>
        </div>
      </div>
    );
  }
  _display = (value) => {
    let updatedDisplay = this.state.display + value
    this.setState({
      display: updatedDisplay
    })
  }
  _clear = () => {
    this.setState({
      display: ""
    })
  }
  _opperand = (value) => {
    let num = this.state.display
    let new_array = this.state.math
    new_array.push(num)
    new_array.push(value)
    this.setState({
      display: "",
      math: new_array
    })
  }
  _equals = () => {
    let num = this.state.display
    let new_array = this.state.math
    new_array.push(num)
    let new_display = eval(new_array.join(' '))
    console.log(new_display)
    this.setState({
      display: new_display,
      math: []
    })
  }
}

export default App;
