import React from 'react';

export const ThemeContext = React.createContext('light');
export function withTheme(Component) {
    return function ThemedComponent(props) {
        return (
            <ThemeContext.Consumer>
                {
                    theme =>
                        <Component { ...props } theme = { theme } />
                }
            </ThemeContext.Consumer>
        )
    }
}