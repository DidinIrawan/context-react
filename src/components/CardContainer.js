import React, {Component} from 'react';
import CardComponent from "./CardComponent";
import ThemeContext from "../context/ThemeContext";

class CardContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <br /><br /><br />
                <ThemeContext.Provider value ={"dark"}>
                    <CardComponent />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default CardContainer;