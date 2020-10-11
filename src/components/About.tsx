import React, { Component } from 'react';

const Styles = {
    aboutSection: {
        height: '100vh',
        backgroundColor: '#ECE8E8',
        id: 'about'
    },
  };


export class About extends Component {
    render() {
        return (
            <div className="about-section" style={Styles.aboutSection} id="about" />
        )
    }
}
