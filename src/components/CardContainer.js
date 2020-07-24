import React, {Component} from 'react';
import CardComponent from "./CardComponent";
import { ThemeContext, themes } from "../context/ThemeContext";

class CardContainer extends Component {
    constructor(props) {
        super(props)

        this.toggleTheme=()=>{
            this.setState({
                theme: this.state.theme ===themes.dark
                    ? themes.light
                    :themes.dark
            })
        }
        this.state = {
            theme:themes.light,
            toggleTheme: this.toggleTheme,
        }
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value ={this.state}>
                    <CardComponent />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default CardContainer;