import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greet = props => {
  let { message1, message2 } = props;
  return (
    <div>
      <h1>{message1}</h1>
      <p />
      <h2>{message2}</h2>
    </div>
  );
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Welcome to state',
      message: '',
      movies: [
        { title: 'I am legend' },
        { title: 'Avengers' },
        { title: 'Star Trek' }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <label>{this.state.greeting}</label>
        <p />
        <ul>
          {this.state.movies.map(movie => {
            return <li>{movie.title}</li>;
          })}
        </ul>
        <h1>Hello World</h1>
        <Greet message1="Hi From component" />
        <Greet message2="This is message 2" />
      </div>
    );
  }
}

export default App;
