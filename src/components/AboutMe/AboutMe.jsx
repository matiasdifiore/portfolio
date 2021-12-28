import React,{useEffect,useRef} from 'react';
import { ArrowForwardIos } from '@material-ui/icons';
import { init } from 'ityped';

import aboutMe from './AboutMe.scss';
import dev from '../../assets/about/dev.svg';
import perfil from '../../assets/about/perfil.jpg';
import resumeEnglish from '../../assets/about/Matías_Di_Fiore_Resume.pdf';
import resumeSpanish from '../../assets/about/Matías_Di_Fiore_CV.pdf';

const AboutMe = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 70,
            strings: ['React.js', 'Node.js', 'MERN', 'Full Stack Web'],
        });
    }, []);
    return (
        <div className="about" id="about">
            <div className="about__left">
                <div className="about__left__background"> </div>
                <div className="about__left__content">
                    <img src={perfil} alt="Agustín Minahk" />
                    <div className="about__left__content__flex">
                        <a
                            href={resumeEnglish}
                            type="application/pdf"
                            target="_blank"
                            className="about__left__content__flex__link"
                        >
                            RESUME
                        </a>
                        <a
                            href={resumeSpanish}
                            type="application/pdf"
                            target="_blank"
                            className="about__left__content__flex__link"
                        >
                            CURRICULUM
                        </a>
                    </div>
                </div>
                <a href="#projects" className="about__left__arrow">
                    <ArrowForwardIos className="about__left__arrow__icon" />
                </a>
            </div>
            <div className="about__right">
                <div className="background"></div>
                <div className="about__right__title">
                    <h2>
                        Matías Di Fiore
                    </h2>
                    
                </div>
                <p className="about__right__title">
                    <span ref={textRef}></span> Developer
                </p>
                <div className="about__right__subtitle">
                    <h2>
                        About <span>me</span>
                    </h2>
                    
                </div>
                <div className="about__right__text">
                   <p>I’m a Full Stack Web Developer. I started studying engineering and at college I had a programming course. From that moment on, I decided that I wanted to learn more about it, and I began learning on my own in my free time. I realized that that was what I wanted to do so I decided to take the Coding Bootcamp of Plataforma 5 with an intensive program of more than 850 hours in three months. There I learned how to use the most popular technologies in the industry and how to work in teams with agile methodologies like SCRUM using them in projects such as a fully functional ecommerce.

I’m looking forward to working in a company that allows me to keep growing, developing my technical skills and learning new technologies.</p>
                </div>
                
            </div>
        </div>
    );
};

export default AboutMe;
