
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Dashboard from './components/dashboard/dashboard';

class App extends Component{
  render(){
    return (
      <div className="main">
        <Dashboard/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
