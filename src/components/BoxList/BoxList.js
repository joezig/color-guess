import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './BoxList.css';

class BoxList extends Component {
    render() {
        return(
            <div className='BoxList'>
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
            </div>
        );
    }
}

export default BoxList;