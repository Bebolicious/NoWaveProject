import React, { Component } from 'react';
import '../App.css';

const logo = require('../Assets/no_wave_logo_black_2.svg')

export class Logo extends Component {

    render() {
        return (<div className="fixedlogo">
            <img src={logo} width={190} />
        </div>
        )
    }
}
