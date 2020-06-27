import React, { Component } from 'react';

import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div
        className='ColorBox'
        style={this.props.styles}
        onClick={this.props.handleClick}
      />
    );
  }
}

export default ColorBox;
