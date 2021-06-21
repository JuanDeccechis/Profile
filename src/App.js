import React, { Component } from "react";
import Contact from './components/Contact';
import Presentation from './components/Presentation';
import './App.css';

import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';
import LanguageChanger from './components/LanguageChanger';
import ThemeChanger from './components/ThemeChanger';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="container asd">
        <LanguageChanger>
          <LanguageContext.Consumer>
            {
              language => (
                <div>
                  <ThemeChanger language={language}>
                    <ThemeContext.Consumer>
                      {
                        theme => (
                          <div className={`app ${theme}`}>
                            <Presentation/>
                            <Navbar></Navbar>
                            <Contact/>
                          </div>
                        )
                      }
                    </ThemeContext.Consumer>
                  </ThemeChanger>
                </div>
              )
            }
          </LanguageContext.Consumer>
        </LanguageChanger>
      </div>
    );
  }
}

export default App;
