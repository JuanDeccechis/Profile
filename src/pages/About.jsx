import React, { Component } from "react";

import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';


class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(){
        this.setState({ width: window.innerWidth });
    }

    render() {
        return (
            <div className="home">
                About
            </div>
        );
    };
}

export default withLanguage(withTheme(About));