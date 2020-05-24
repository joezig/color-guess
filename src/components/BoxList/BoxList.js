import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './BoxList.css';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numSquares: []
        }  
    }

    componentDidMount() {
        // Generate array of Color Boxes for state.numSquares
        this.setState({
            numSquares: new Array(9).fill(
                <ColorBox 
                    bg={{backgroundColor: this.bgRand()}} 
                    click={this.handleClick} 
                />
            )
        })
    }

     // Generate random background color
     bgRand = () => {
        const randNum = () => {
            return Math.floor(Math.random() * 256)
        };
        return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
    }

handleClick = () => {
    console.log()
}
    render() {
        
        return(
            <div className='BoxList'>
                <div className='BoxList-header'>
                    <h2>Guess the Color</h2>
                </div>
                <div className='BoxList-color-boxes'>
                    {this.state.numSquares}
                </div>
            </div>
        );
    }
}

export default BoxList;