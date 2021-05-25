import React, { Component } from "react";
import ActionLink from './ActionLink'

class Contact extends Component {
    render() {
        return (
            <div>

            <div className="img short-img img-linkedIn"></div>
            <div className="img short-img img-github"></div>
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