import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../styles/nav.css';
import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <ul className="nav">
            <li>
                <NavLink exact to="/Profile" activeClassName="active"> Home </NavLink>
            </li>
            <li>
                <NavLink to="/Profile/About" activeClassName="active"> About </NavLink>
            </li>
        </ul>
      )
  }
}

export default  withLanguage(withTheme(Nav));
