import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class LanguageChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'es'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        const field = event.target.name;
        this.setState({ [field]: value });
    }

    render() {
        return (
            <div>
                <select
                    value={this.state.language}
                    onChange={this.handleChange}
                    name="language"
                >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
                <LanguageContext.Provider value={this.state.language} >
                    {this.props.children}
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default LanguageChanger;