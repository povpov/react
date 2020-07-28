import React from 'react';

const StoreContext = React.createContext(null);

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // значение по умолчанию
);
export default StoreContext