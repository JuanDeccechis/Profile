import React, { Component } from 'react';

import ThemeContext from '../contexts/ThemeContext';
import '../styles/switcher.css';

class ThemeChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            switchDark: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
    }
    
    handleChange(event) {
        const value = event.target.value;
        const field = event.target.name;
        this.setState({ [field]: value });
    }

    handleSwitch(event){
        let newTheme = this.state.switchDark ? 'light' : 'dark';
        this.setState({ switchDark: !this.state.switchDark, theme: newTheme });
    }

    render() {
        return (
            <div>
                <div className="container-switcher">
                    <span className="label-switcher">{this.props.language === 'es' ? 'modo nocturno' : 'dark mode' }: </span>
                    <label class="switch">
                        <input type="checkbox" checked={this.state.switchDark} onChange={this.handleSwitch} />
                        <span class="slider round"></span>
                    </label>
                </div>
                <ThemeContext.Provider value={this.state.theme} >
                    {this.props.children}
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default ThemeChanger;