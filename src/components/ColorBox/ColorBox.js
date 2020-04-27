import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        function bgColor() {
            return 'red';
        }
        return(
            <div className={`ColorBox`}>
                {/* <h1>Hello</h1> */}
            </div>
        );
    }
}

export default ColorBox;