import React, { Component } from "react";
import Contact from './components/Contact';
import Curriculum from './pages/Curriculum';
import Presentation from './components/Presentation';
import './App.css';

import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';
import LanguageChanger from './components/LanguageChanger';
import ThemeChanger from './components/ThemeChanger';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LanguageChanger>
          <LanguageContext.Consumer>
            {
              language => (
                <div>
                  <ThemeChanger language={language}>
                    <ThemeContext.Consumer>
                      {
                        theme => (
                          <div>
                            <Presentation/>
                            <Curriculum/>
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
