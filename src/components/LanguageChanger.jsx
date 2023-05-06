import React, { Component } from 'react';

import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/language.css'

class LanguageChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: "es"
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(value){
        this.setState({ selectedLanguage: value });
    }

    render() {
        let languages = [ {
            "label": "English",
            "value": "en"
        }, {
            "label": "Español",
            "value": "es"
        }];
        let self = this;
        return (
            <div className="container">
                <ul className="languages">
                    {languages.map((elem, index) => {
                        return (<li key={index}
                            className={elem.value === self.state.selectedLanguage ? 'languageSelected': ''}
                            onClick={function () {
                                self.updateLanguage(elem.value);
                            }}
                        >
                            {elem.label}
                        </li>)
                    })
                    }
                </ul>
                <LanguageContext.Provider value={this.state.selectedLanguage} >
                    {this.props.children}
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default LanguageChanger;