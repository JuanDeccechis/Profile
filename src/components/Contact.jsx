import React, { Component } from "react";
import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';

class Contact extends Component {
    render() {
        const { language } = this.props;
        return (
            <div>
                {language === 'es' ?
                    <p className="inline">
                        Para mas información pueden visitar mis perfiles:
                    </p>
                :
                    <p className="inline">
                        For more information, you can go to my profiles:
                    </p>
                }
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

export default withLanguage(withTheme(Contact));