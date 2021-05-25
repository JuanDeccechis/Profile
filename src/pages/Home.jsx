import React, { Component } from "react";

import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import LanguageChanger from '../components/LanguageChanger';
import ThemeChanger from '../components/ThemeChanger';
import Topic from '../components/Topic';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <LanguageChanger>
                <LanguageContext.Consumer>
                    {
                        language => (
                            <div>
                                <ThemeChanger language={language}>
                                <ThemeContext.Consumer>
                                    {
                                        theme => (
                                            <div className={`app ${theme}`}>
                                                <h1>
                                                    {language === 'es' ? "Bienvenido a mi perfil" : "Welcome to my profile"}
                                                </h1>
                                                <div className="presentation">
                                                    <div className="img img-profile"></div>
                                                    <div className="user-information">
                                                        <p> JUAN CRUZ DECCECHIS <div className="img short-img img-user inline"></div></p>
                                                        <p> juandeccechis@gmail.com <div className="img short-img img-mail inline"></div></p>
                                                        <p> +5492494581833 <div className="img short-img img-phone inline"></div></p>
                                                    </div>
                                                </div>
                                                <Topic title="Experiencia Profesional" since="2019" until="Presente" employer="Technisys" rol="Fullstack Developer" moreInfo="Desarrollo de aplicaciones bancarias web/mobile"></Topic>
                                                <Topic since="2018" until="2021" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Ayudante alumno Web 1 - Investigacion Operativa" moreInfo=""></Topic>
                                                <Topic title="Estudios" since="2012" until="2019" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Ingeniería de Sistemas" moreInfo="Estado: Finalizado"></Topic>
                                                <Topic since="2018" until="Presente" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas" moreInfo="Estado: 90%"></Topic>
                                                <Topic title="Aptitudes" rol="Proactivo, Responsable, Trabajo en equipo"></Topic>
                                                <Topic title="Conocimientos"></Topic> 
                                                <div className="list-items">
                                                    <Topic rol="React - TS - JS ES6 - JS"></Topic>
                                                    <Topic rol="SASS - CSS3 - CSS"></Topic>
                                                    <Topic rol="HTML5 - HTML"></Topic>
                                                    <Topic rol="JAVA"></Topic>
                                                    <Topic rol="BD Oracle SQL"></Topic>
                                                </div>
                                            </div>
                                        )
                                    }
                                </ThemeContext.Consumer>
                                </ThemeChanger>
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