import React from "react";

const themes={
    light:{
        background:"#121212",
        color:"#ffffff"
    },
    dark:{
        color:"#121212",
        background:"#ffffff"
    }
}

// create context with default value light
const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme:() => { },
});

export {ThemeContext,themes};