import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { input } from './components/redux/Actions/inputAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input type="text" value={this.props.input} onChange={this.props.inputAction} placeholder='Enter REDUX'/>
        </header>
      </div>
    );
  }
}

function mapStateToProps (state){ // Ця функція звертається до state
  return {
    input: state.input
  }
}

function mapDispatchToProps (dispatch){
  return {
   inputAction: function(e){
    dispatch(input(e))
   },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
