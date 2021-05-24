import React from 'react';

export const themes = { light: { background: "#FFFFFF", primary: "#0005FF", textPrimary: "#131F33", block: "#666D7A", icon: "#25AE88" }, dark: { background: "#131F33", primary: "#BBD0FF", textPrimary: "#FFFFFF", block: "#666D7A", icon: "#25AE88" } };
const ThemeContext = React.createContext(themes.light);
export default ThemeContext;