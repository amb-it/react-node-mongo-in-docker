import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";


export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      api_message: 'Not connected yet',
      mongo_connection: 'Undefined'
    };
  }
  
  componentDidMount() {
    axios.get(process.env.REACT_APP_API_ADDRESS)
      .then(res => {
        this.setState({
          api_message: res.data.message,
          mongo_connection: res.data.mongo_connection
        });
      })
      .catch(error => {
        this.setState({
          api_message: "Axios " + error.toString()
        });
        console.log(error);
      })
  }
  
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Node.js API response: - <b>{this.state.api_message}</b>
        </div>
        <div>
          MongoDB connection check: - <b>{this.state.mongo_connection ? "" : "not"} connected</b>
        </div>
      </div>
    );
  }
}
