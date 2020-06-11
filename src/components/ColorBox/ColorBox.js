import React, { Component } from 'react';

import './ColorBox.css';

class ColorBox extends Component {

    // handleClick() {
    //     this.setState({ backgroundColor: this.changeBG()})
    // }
    
    render() {
        return(
            <div 
                className='ColorBox' 
                style={this.props.styles}
            />
        );
    }
}

export default ColorBox;