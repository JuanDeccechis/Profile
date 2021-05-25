import React from 'react';

export const LanguageContext = React.createContext('es');

export function withLanguage(Component) {
    return function LanguagedComponent(props) {
        return (
            <LanguageContext.Consumer>
                {
                    language =>
                        <Component { ...props } language = { language } />
                }
            </LanguageContext.Consumer>
        )
    }
}