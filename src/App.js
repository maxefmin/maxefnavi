import React, { Component } from 'react';
import { NavProvider, NavRoute, NavNotFoundBoundary } from 'react-navi';
import logo from './logo.svg';
import './App.css';

//  Navi's React components work together to handle navigation based on the currently
// accessed route. All of this functionality exists within a layout made with JSX.
// wrap around the content of each route
// Visit https://frontarm.com/navi/reference/declarations/ to find out more.
class App extends Component {
  render() {
    return (
      <NavProvider navigation={this.props.navigation}>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <NavNotFoundBoundary render={renderNotFound}>
            <NavRoute />
        </NavNotFoundBoundary>
      </div>
    </NavProvider>
    );
  }
}

const renderNotFound = () => (
   <div className="App-error">
      <h1>404 - Page not found.</h1>
   </div>
)

export default App;
