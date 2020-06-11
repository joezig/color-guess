import React, { Component } from 'react';

import ColorBox from '../ColorBox/ColorBox';

import './BoxList.css';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: ['orange', 'red', 'green', 'yellow']
        }
        this.changeBG = this.changeBG.bind(this);
    }

    changeBG() {
        // need to map over state of colors and reassign them
        let num = () => Math.floor(Math.random() *256);
        let color = `rgb(${num()}, ${num()}, ${num()})`
        this.setState({backgroundColor: color})
        console.log(color)
    }

    render() {
        return(
            <div>
                <div className='BoxList'>
                    {this.state.backgroundColor.map(color => (
                        <ColorBox styles={{backgroundColor: color}} />
                    ))}
                    {/* <ColorBox styles={{backgroundColor: this.state.backgroundColor}} />
                    <ColorBox styles={{backgroundColor: this.state.backgroundColor}} />
                    <ColorBox styles={{backgroundColor: this.state.backgroundColor}} /> */}
                </div>
                <button onClick={this.changeBG}>Change Color</button>
            </div>
        )
    }
}

export default BoxList;