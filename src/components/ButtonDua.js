import React from "react";
import {ThemeContext} from "../context/ThemeContext";

const ButtonDua = () => {
    return (
        <div>
            <ThemeContext.Consumer>
                {({theme,toggleTheme}) => {
                    return (
                        <>
                            <div style={{ ...theme,height:100}}>
                                <h1 style={{ ...theme}}>Belajar Context Dinamis</h1>
                            </div>
                        <button
                            style={{
                                height: 50,
                                width: 80,
                               ...theme
                            }}
                            onClick={toggleTheme}
                        >
                            GANTI TEMA
                        </button>
                        </>
                    );
                }}
            </ThemeContext.Consumer>
        </div>
    );
};

export default ButtonDua;