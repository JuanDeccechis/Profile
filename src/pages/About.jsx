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
                        <p>Me gusta viajar, conocer lugares nuevos, pasar tiempo con amigos y ver stand up.</p>
                        <p>Mis referentes son:</p>
                        <div className="references">
                            <References name="Sebastian Colavita" rol="PM" contactPhone="+549249 4696234"></References>
                            <References name="Gerardo Gonzalez Durá" rol="PM" contactPhone="+59894 407270"></References>
                            <References name="Sebastian Bisbal" rol="TL" contactPhone="+549249 4509773"></References>
                            <References name="Andrea Toyos" rol="TL" contactPhone="+549249 4209036"></References>
                            <References name="Rodrigo Pena" rol="Dev - Mentor" contactPhone="+549249 4476194"></References>
                            <References name="Cristian Oses" rol="Dev" contactPhone="+549249 4683292"></References>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>I like traveling, seeing new places, spending time with my friends and watching stand up.</p>
                        <p>My referents are:</p>
                        <div className="references">
                            <References name="Sebastian Colavita" rol="PM" contactPhone="+549249 4696234"></References>
                            <References name="Gerardo Gonzalez Durá" rol="PM" contactPhone="+59894 407270"></References>
                            <References name="Sebastian Bisbal" rol="TL" contactPhone="+549249 4509773"></References>
                            <References name="Andrea Toyos" rol="TL" contactPhone="+549249 4209036"></References>
                            <References name="Rodrigo Pena" rol="Dev - Mentor" contactPhone="+549249 4476194"></References>
                            <References name="Cristian Oses" rol="Dev" contactPhone="+549249 4683292"></References>
                        </div>
                    </div>
                )}
            </div>
        );
    };
}

export default withLanguage(withTheme(About));