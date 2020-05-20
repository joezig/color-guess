import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    static defaultProps = {
        bg: 'blue'
    }

    bgRand = () => {
        const randNum = () => {
            return Math.floor(Math.random() * 256)
        };
        return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
    }

    render() {
        return(
            <div onClick={this.changeBg} className={`ColorBox`} style={{backgroundColor: this.bgRand()}}>
                {/* {this.bgRand()} */}
            </div>
        );
    }
}

export default ColorBox;