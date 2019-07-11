import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";


export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      data: 'React app with axios'
    };
  }
  
  componentDidMount() {
    const apiUrl =  'http://localhost:8080';
    
    axios.get(apiUrl)
      .then(res => {
        this.setState({
          data: res.data.message
        });
      })
      .catch(error => {
        this.setState({
          data: "Axios " + error.toString()
        });
        console.log(error);
      })
  }
  
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Node.js API response:
          <h3>
            {this.state.data}
          </h3>
        </div>
      </div>
    );
  }
}
