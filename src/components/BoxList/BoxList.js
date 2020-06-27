import React, { Component } from 'react';

import ColorBox from '../ColorBox/ColorBox';

import './BoxList.css';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: [
        `rgba(255, 0, 100)`,
        `rgba(0, 200, 200)`,
        `rgba(0, 0, 200)`,
        `rgba(200, 0, 0)`,
        `rgba(0, 200, 2)`,
        `rgba(20, 20, 20)`,
      ],
    };
    this.changeBG = this.changeBG.bind(this);
    this.isWinner = this.isWinner.bind(this);
  }

  static defaultProps = {
    winningColor: Math.floor(Math.random() * 6),
  };

  changeBG(id) {
    // need to map over state of colors and reassign them
    const num = () => Math.floor(Math.random() * 256);
    let color = `rgb(${num()}, ${num()}, ${num()})`;
    // this.setState({ backgroundColor: color });
    console.log(color, id);
    console.log(this.state.backgroundColor[id]);
  }

  isWinner(id) {
    console.log(
      this.state.backgroundColor[this.props.winningColor] ===
        this.state.backgroundColor[id]
    );
  }

  render() {
    const winner = this.state.backgroundColor[this.props.winningColor];

    return (
      <div>
        <h1>{winner} </h1>
        <div className='BoxList'>
          {this.state.backgroundColor.map((color, i) => (
            <ColorBox
              styles={{ backgroundColor: color }}
              key={color}
              handleClick={() => this.isWinner(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BoxList;
