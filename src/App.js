import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

const renderItem = (item) => {
  if(item.url) {
    return (<li key={item.text}><a href={item.url}>{item.text}</a></li>);
  }

  return (<li key={item.text}>{item.text}</li>)
}

export const Breadcrumb = ({items}) => (<ul>
  {items.map(renderItem)}
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
        <div className="App-intro">
          <Breadcrumb />
        </div>
      </div>
    );
  }
}

export default App;
