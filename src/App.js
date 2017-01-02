import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

export const Breadcrumb = ({items}) => (<ul>
  {items.map(() => (<li></li>))}
</ul>);

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = {
  items: []
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Breadcrumb />
        </p>
      </div>
    );
  }
}

export default App;
