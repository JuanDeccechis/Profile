import React, { Component } from "react";

import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';
import '../styles/reference.css';

class References extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
     }

    render() {
        const { name, rol } = this.props;
        return (
            <div className="reference-spaces">
                {name} - {rol}
            </div>
        );
    };
}

export default withLanguage(withTheme(References));