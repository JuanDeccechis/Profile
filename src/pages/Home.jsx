import React, { Component } from "react";

import LanguageChanger from '../components/LanguageChanger';
import LanguageContext from '../contexts/LanguageContext';
import ThemeChanger from '../components/ThemeChanger';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <LanguageChanger>
                    <LanguageContext.Consumer>
                        {
                            language => (
                                <div className="app">
                                    <ThemeChanger language={language}></ThemeChanger>
                                    <h1>
                                        {language === 'es' ? "Bienvenido a mi perfil" : "Welcome to my profile"}
                                    </h1>

                                </div>
                            )
                        }
                    </LanguageContext.Consumer>
                </LanguageChanger>
            </div>
        );
    };
}

export default Contact;