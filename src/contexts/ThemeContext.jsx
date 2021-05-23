import React from 'react';

export const themes = { light: { background: "white", primary: "blue" }, dark: { background: "blue", primary: "white" } };
const ThemeContext = React.createContext(themes.light);
export default ThemeContext;