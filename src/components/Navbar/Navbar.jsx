import React from 'react';
import { Person, Mail } from '@material-ui/icons';
import production_video from '../../assets/wallpapers/fondo1.mp4';
import './Navbar.scss';

const Navbar = ({ menu, setMenu }) => {
    return (
        <div className={'navbar ' + (menu && 'active')}>
            {/* <video className="video" src={production_video} autoPlay loop muted /> */}
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">
                    <span>{`<`}</span> MD <span>{`/>`}</span>
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span> +54 9 1158799112 </span>

                        <Mail className="icon" />
                        <a href="#contact">
                            <span>difioremati@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenu(!menu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
