import React, { Component } from "react";

import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';
import Topic from '../components/Topic';

class Curriculum extends Component {
    render() {
        const { language } = this.props;
        return (
            <div className="curriculum">
                <h1>Curriculum Vitae</h1>
                <div className={`${this.props.showImage ? "cv-presentation-complete" : "cv-presentation-simple"}`}>
                    {this.props.showImage &&
                        <div className="img img-profile"></div>
                    }
                    <div className={`user-information`}>
                        <p> JUAN CRUZ DECCECHIS <div className="img short-img img-user inline"></div></p>
                        <p> juandeccechis@gmail.com <div className="img short-img img-mail inline"></div></p>
                        <p> +5492494581833 <div className="img short-img img-phone inline"></div></p>
                    </div>
                </div>
                {language === 'es' ?
                    <div>
                        <Topic title="Experiencia Profesional" since="2019" until="Presente" employer="Technisys" rol="SSR Fullstack Developer - JAVA REACT" moreInfo="Desarrollo de aplicaciones bancarias web/mobile"></Topic>
                        <Topic since="2018" until="2021" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Ayudante alumno Web 1 - Investigacion Operativa" moreInfo=""></Topic>
                        <Topic title="Estudios" since="2012" until="2019" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Ingeniería de Sistemas" moreInfo="Estado: Finalizado"></Topic>
                        <Topic since="2018" until="2022" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas" moreInfo="Estado: 90%"></Topic>
                        <Topic title="Inglés" rol="Nivel: Intermedio"></Topic>
                        {/*
                            <Topic title="Aptitudes" rol="Proactivo, Responsable, Trabajo en equipo"></Topic>
                        */}
                        <Topic title="Conocimientos"></Topic>
                        <div className="list-items">
                            <Topic rol="React - JS "></Topic>
                        {/*    <Topic rol="SASS - CSS3 - CSS "></Topic>
                            <Topic rol="HTML5 - HTML "></Topic>
                        */}
                            <Topic rol="Microservicios "></Topic>
                            <Topic rol="Java "></Topic>
                            <Topic rol="BD Oracle SQL"></Topic>
                        </div>
                        <div className="details">
                            <Topic title="Proyectos" rol="Desarrollo de aplicaciones bancarias web/mobile - flujos nuevos y mantenimiento"></Topic>
                            <div>
                                <Topic title="Tecnologías" rol="Java v8 - v11 - React v15 - plugin cordova (MB)"></Topic>
                                <Topic title="Forma de trabajo" rol="Scrum - Github"></Topic>
                            </div>
                        </div>
                    </div>
                :
                    <div>
                        <Topic title="Job experience" since="2019" until="Today" employer="Technisys" rol="SSR Fullstack Developer - JAVA REACT" moreInfo="work with banking apps web/mobile"></Topic>
                        <Topic since="2018" until="2021" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Ayudante alumno Web 1 - Investigacion Operativa" moreInfo=""></Topic>
                        <Topic title="Education" since="2012" until="2019" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Ingeniería de Sistemas" moreInfo="Status: Finished"></Topic>
                        <Topic since="2018" until="2022" employer="Universidad Nacional del Centro de la Provincia de Buenos Aires" rol="Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas" moreInfo="Status: Finished"></Topic>
                        <Topic title="English" rol="Level: Intermediate"></Topic>
                        {/*<Topic title="Skills" rol="Proactive, Responsible, Team work"></Topic>
                        */}
                        <Topic title="Professional skills"></Topic>
                        <div className="list-items">
                            <Topic rol="React - JS "></Topic>
                        {/*    <Topic rol="SASS - CSS3 - CSS "></Topic>
                            <Topic rol="HTML5 - HTML "></Topic>
                        */}
                            <Topic rol="Microservicies "></Topic>
                            <Topic rol="Java "></Topic>
                            <Topic rol="BD Oracle SQL"></Topic>
                        </div>
                        <div className="details">
                            <Topic title="Proyects" rol="Web/mobile banking apps - maintenance and new features"></Topic>
                            <div>
                                <Topic title="Tecnologies" rol="Java v8 - v11 - React v15 - plugin cordova (MB)"></Topic>
                                <Topic title="Job tools" rol="Scrum - Github"></Topic>
                            </div>
                        </div>
                    </div>
                }
            </div>


        );
    };
}

export default withLanguage(withTheme(Curriculum));