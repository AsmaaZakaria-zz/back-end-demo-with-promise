import React,{Component} from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import {Login} from "./login.js"

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>


        <Login />

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
