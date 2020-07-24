import React from "react";
import ThemeContext from "../context/ThemeContext";

const ButtonDua = () => {
    return (
        <div>
            <ThemeContext.Consumer>
                {(value) => {
                    return (
                        <button
                            style={{
                                height: 50,
                                width: 80,
                                backgroundColor: value === "dark" ? "blue" : "white",
                                color: value !== "dark" ? "#121212" : "skyblue",
                            }}
                        >
                            Button Dua
                        </button>
                    );
                }}
            </ThemeContext.Consumer>
        </div>
    );
};

export default ButtonDua;