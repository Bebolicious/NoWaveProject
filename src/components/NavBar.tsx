import React from 'react';
import { Link } from 'react-scroll';

const Styles = {
    ul: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-evenly'
    },
    text: { fontSize: '1.4em', marginLeft: '80px', whiteSpace: 'nowrap' as 'nowrap' }
};

export class NavBar extends React.Component {

    render() {
        return (

            <div className="navbar">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                     <div style={Styles.text}>About</div>
                </Link>
                <Link
                    activeClass="active"
                    to="history"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                   <div style={Styles.text}>History</div>
                </Link>
                <Link
                    activeClass="active"
                    to="characteristics"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <div style={Styles.text}>Characteristics</div>
                </Link>
                <Link
                    activeClass="active"
                    to="visualart"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <div style={Styles.text}>Visual Art</div>
                </Link>

            </div>
        )
    }
}
