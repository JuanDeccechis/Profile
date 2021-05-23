import React, { Component } from "react";
import Contact from './components/Contact';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Home />
        <Contact />

      </div>
    );
  }
}

export default App;
