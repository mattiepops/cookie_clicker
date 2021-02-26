import React from "react";
import {render} from "react-dom";
import Increment from "./Increment";
import './style.scss';

class App extends React.Component{

    render(){
        return(
            <Increment/>
        )
    }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
