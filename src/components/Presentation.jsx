import React, { Component } from "react";
import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';

class Presentation extends Component {
    render() {
        const { theme, language } = this.props;
        return (
            language === 'es' ? (
                <div className="container">
                    <h1>¡Bienvenidos a mi perfil!</h1>
                    <div className="presentation">
                        <p>Soy <b>Juan Cruz Deccechis</b>, un jóven desarrollador fullstack, como pueden observar en mi CV.</p>
                        <p>Decidí hacer esta aplicación como una forma distinta de mostrar mis conocimientos, y comunicarles un poco mas de lo que se puede
                            observar en un Curriculum.</p> <br />
                        <p>Me gusta viajar, conocer lugares nuevos, pasar tiempo con amigos, ver sagas de peliculas y ver stand up.</p>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <h1>Welcome to my profile!</h1>
                    <div className="presentation">
                        <p>I'm <b>Juan Cruz Deccechis</b>, a young fullstack developer, as you can see in my CV.</p>
                        <p>I did this app to show my knoleadges, and to give you a little more information that you can see in a CV.</p> <br />
                        <p>I like traveling, seeing new places, spending time with my friends, watching movies sagas, and watching stand up.</p>
                    </div>
                </div>
            )
        );
    };
}

export default withLanguage(withTheme(Presentation));;