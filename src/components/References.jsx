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
        const { name, rol, contactPhone } = this.props;
        return (
            <div className="reference-spaces">
                <p>{name} - <b>{rol}</b></p>
                <p> {contactPhone} <div className="img short-img img-phone inline"></div></p>
            </div>
        );
    };
}

export default withLanguage(withTheme(References));