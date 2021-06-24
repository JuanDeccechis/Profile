import React, { Component } from "react";

import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';
import References from '../components/References';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const { theme, language } = this.props;
        return (
            <div className="page">
                {language === 'es' ? (
                    <div>
                        <p>Me gusta viajar, conocer lugares nuevos, pasar tiempo con amigos, ver sagas de peliculas y ver stand up.</p>
                        <p>Mis referentes son:</p>
                        <div className="references">
                            <References name="Sebastian Colavita" rol="PM"></References>
                            <References name="Gerardo Gonzalez Durá" rol="PM"></References>
                            <References name="Sebastian Bisbal" rol="TL"></References>
                            <References name="Andrea Toyos" rol="TL"></References>
                            <References name="Rodrigo Pena" rol="Dev - Mentor"></References>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>I like traveling, seeing new places, spending time with my friends, watching movies sagas, and watching stand up.</p>
                        <p>My referents are:</p>
                        <div className="references">
                            <References name="Sebastian Colavita" rol="PM"></References>
                            <References name="Gerardo Gonzalez Durá" rol="PM"></References>
                            <References name="Sebastian Bisbal" rol="TL"></References>
                            <References name="Andrea Toyos" rol="TL"></References>
                            <References name="Rodrigo Pena" rol="Dev - Mentor"></References>
                        </div>
                    </div>
                )}
            </div>
        );
    };
}

export default withLanguage(withTheme(About));