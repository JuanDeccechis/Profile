import React, { Component } from 'react';

import { themes } from '../contexts/ThemeContext';
import ThemeContext from '../contexts/ThemeContext'

class ThemeChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
            themeSelected: "light"
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        const field = event.target.name;
        this.setState({ [field]: value, theme: themes[value] });

    }

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <select
                    value={this.state.themeSelected}
                    onChange={this.handleChange}
                    name="themeSelected"
                >
                    <option value="light">{this.props.language === 'es' ? "diurno" : "light"}</option>
                    <option value="dark">{this.props.language === 'es' ? "nocturno" : "dark"}</option>
                </select>
                <ThemeContext.Provider value={this.state.theme} >
                    {this.props.children}
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default ThemeChanger;