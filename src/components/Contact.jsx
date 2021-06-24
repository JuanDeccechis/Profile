import React, { Component } from "react";
import ActionLink from './ActionLink'

class Contact extends Component {
    render() {
        return (
            <div>
                <p className="inline">
                    Para mas información pueden visitar mis perfiles:
                </p>
                <ul className="contact">
                    <li>
                        <button className="button-with-icon" onClick={() => window.open("https://github.com/JuanDeccechis", "_blank")}>
                            <div className="img short-img img-button img-github inline"></div>
                            Github
                        </button>
                    </li>
                    <li>
                        <button className="button-with-icon" onClick={() => window.open("https://www.linkedin.com/in/juan-cruz-deccechis-873882177/", "_blank")}>
                            <div className="img short-img img-button img-linkedIn inline"></div>
                            LinkedIn
                        </button>
                    </li>
                </ul>
            </div>
        );
    };
}

export default Contact;