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
        const { theme, language } = this.props;
        return (
            language === 'es' ? (
                <div className="page">
                    <p>Me gusta viajar, conocer lugares nuevos, pasar tiempo con amigos, ver sagas de peliculas y ver stand up.</p>
                </div>
            ) : (
                <div className="page">
                    <p>I like traveling, seeing new places, spending time with my friends, watching movies sagas, and watching stand up.</p>
                </div>
            )
        );
    };
}

export default withLanguage(withTheme(About));