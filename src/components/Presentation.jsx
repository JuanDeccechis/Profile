import React, { Component } from "react";
import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';

class Presentation extends Component {
    render() {
        const { language } = this.props;
        return (
            language === 'es' ? (
                <div className="container">
                    <h1>¡Bienvenidos a mi perfil!</h1>
                    <div className="presentation">
                        <p>Soy <b>Juan Cruz Deccechis</b>, un desarrollador fullstack semi senior, como pueden observar en mi CV.</p>
                        <p>Decidí hacer esta aplicación como una forma distinta de mostrar mis conocimientos, y comunicarles un poco mas de lo que se puede
                            observar en un Curriculum.</p>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <h1>Welcome to my profile!</h1>
                    <div className="presentation">
                        <p>I'm <b>Juan Cruz Deccechis</b>, a semi senior fullstack developer, as you can see in my CV.</p>
                        <p>I have developed this app to show my knoleadge and to give you further information from what you can see in the CV.</p>
                    </div>
                </div>
            )
        );
    };
}

export default withLanguage(withTheme(Presentation));;