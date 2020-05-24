import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        return(
            <div onClick={this.props.click} className={`ColorBox`} style={this.props.bg} >
            </div>
        );
    }
}

export default ColorBox;