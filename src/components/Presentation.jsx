import React, { Component } from "react";

class Presentation extends Component {
    render() {
        return (
            <div className="container">
                <h1>¡Bienvenidos a mi perfil!</h1>
                <div className="presentation">
                    <p>Soy <b>Juan Cruz Deccechis</b>, un jóven desarrollador fullstack, como pueden observar en mi CV.</p>
                    <p>Decidí hacer esta aplicación como una forma distinta de mostrar mis conocimientos, y comunicarles un poco mas de lo que se puede 
                        observar en un Curriculum.</p> <br/>
                    <p>Me gusta viajar, conocer lugares nuevos, pasar tiempo con amigos, ver sagas de peliculas y ver stand up.</p>
                </div>
            </div>
        );
    };
}

export default Presentation;