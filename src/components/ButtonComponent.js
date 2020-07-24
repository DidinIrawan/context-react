import React, { Component } from "react";
import ThemeContext from "../context/ThemeContext";

class ButtonComponent extends Component {
    render() {
        console.log(this.context);
        return (
            <div>
                <button
                    style={{
                        height: 50,
                        width: 80,
                        backgroundColor: this.context === "dark" ? "#121212" : "#ffffff",
                        color: this.context !== "dark" ? "#121212" : "#ffffff",
                    }}
                >
                    Button
                </button>
            </div>
        );
    }
}

export default ButtonComponent;

ButtonComponent.contextType = ThemeContext;