import React, { Component } from "react";
import ActionLink from './ActionLink'

class Contact extends Component {
    render() {
        return (
            <ul className="contact">
                <li>
                    <ActionLink to="https://github.com/JuanDeccechis" linkText="Github" />
                </li>
                <li>
                    <ActionLink to="https://www.linkedin.com/in/juan-cruz-deccechis-873882177/" linkText="LinkedIn" />
                </li>
            </ul>
        );
    };
}

export default Contact;