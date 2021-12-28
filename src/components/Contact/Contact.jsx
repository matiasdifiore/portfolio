import React from 'react';

import { BsGoogle } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import './Contact.scss';
import gmail from '../../assets/socials/gmail.png';
import ig from '../../assets/socials/ig.png';
import wpp from '../../assets/socials/wpp.png';
import github from '../../assets/socials/github.png';
import linkedin from '../../assets/socials/linkedin.png';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2 className="title">
                CONTACT<span> ME</span>
            </h2>
            <div className="social-buttons">
                <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrvNTDJFzKfFwnsTRlbrqSNcbVJjxpNRdcCkKZNVnzgLdgHPkZsnmvvWfnxBPpLtBgNNx"
                    className="social-buttons__button  social-button"
                    aria-label="Gmail"
                    target="_blank"
                >
                    <img src={gmail} alt="Gmail" />
                    <span>Gmail</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/matias-di-fiore-9b585a226/"
                    className="social-buttons__button social-button"
                    aria-label="LinkedIn"
                    target="_blank"
                >
                    <img src={linkedin} alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>
                <a
                    href="https://github.com/matiasdifiore"
                    className="social-buttons__button social-button"
                    aria-label="GitHub"
                    target="_blank"
                >
                    <img src={github} alt="GitHub" />
                    <span>GitHub</span>
                </a>
                <a
                    href="https://wa.me/5491158799112"
                    className="social-buttons__button social-button"
                    aria-label="WhatsApp"
                    target="_blank"
                >
                    <img src={wpp} alt="WhatsApp" />
                    <span>WhatsApp</span>
                </a>
               
            </div>
        </div>
    );
};

export default Contact;
