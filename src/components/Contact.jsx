import React, { Component } from "react";
import ActionLink from './ActionLink'

class Contact extends Component {
    render() {
        return (
            <div>

            <div className="img img-linkedIn1"></div>
            <div className="img img-linkedIn2"></div>
            <ul className="contact">
                <li>
                    <ActionLink to="https://github.com/JuanDeccechis" linkText="Github" />
                </li>
                <li>
                    <ActionLink to="https://www.linkedin.com/in/juan-cruz-deccechis-873882177/" linkText="LinkedIn" />
                </li>
            </ul>
            </div>
        );
    };
}

export default Contact;