import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './BoxList.css';

class BoxList extends Component {
    static defaultProps = {
        bg: 'blue'
    }
    render() {
        return(
            <div className='BoxList'>
                <div className='BoxList-header'>
                    <h2>Guess the Color</h2>
                </div>
                <div className='BoxList-color-boxes'>
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                </div>
            </div>
        );
    }
}

export default BoxList;