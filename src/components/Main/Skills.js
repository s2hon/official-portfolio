import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHtml5,
    faCss3,
    faBootstrap,
    faJsSquare,
    faNode,
    faNpm,
    faReact,
    faGit
} from "@fortawesome/free-brands-svg-icons";
import logo1 from '../../components/App/assets/images/logo/icons8-redux.svg'
import logo2 from '../../components/App/assets/images/logo/mysql.svg'
import logo3 from '../../components/App/assets/images/logo/icons8-mongodb.svg'
import logo4 from '../../components/App/assets/images/logo/icons8-heroku.svg'
import logo5 from '../../components/App/assets/images/logo/icons8-google-analytics.svg'



import Loadable from "@loadable/component"
const OwlCarousel = Loadable(() => import("react-owl-carousel3"))

const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
};

const Partners = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="logo-area ptb-100 pt-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">SKILLS</span>
                    <h2>What am I good at?</h2> 
                    <h2 className="right">Have A Look</h2>
                </div>
                <div className="container">
                    {display ? <OwlCarousel 
                        className="logo-slider owl-carousel owl-theme"
                        {...options}
                    >  
                        <div className="logo-item icon">
                            <FontAwesomeIcon icon={faHtml5} size="4x" color="#f06529"/>
                        </div>

                        <div className="logo-item">
                            <FontAwesomeIcon icon={faCss3} size="4x" color="#2965f1"/>
                        </div>

                        <div className="logo-item">
                            <FontAwesomeIcon icon={faBootstrap} size="4x" color="#563d7c"/>
                        </div>

                        <div className="logo-item">
                            <FontAwesomeIcon icon={faJsSquare} size="4x" color="#f0db4f"/>
                        </div>

                        <div className="logo-item">
                            <FontAwesomeIcon icon={faNode} size="4x" color="#3C873A"/>
                        </div>

                        <div className="logo-item">
                            <img src={logo2} alt="mySql" width="70"/>
                        </div>

                        <div className="logo-item">
                            <img src={logo3} alt="MongoDB" width="70"/>
                        </div>

                        <div className="logo-item">
                            <FontAwesomeIcon icon={faReact} size="4x" color="#61DBFB"/>
                        </div>

                        <div className="logo-item">
                            <img src={logo1} alt="redux" width="70"/>
                        </div>

                        <div className="logo-item">
                            <FontAwesomeIcon icon={faGit} size="4x" color="#f34f29"/>
                        </div>

                        <div className="logo-item">
                            <img src={logo4} alt="Heroku" width="70"/>
                        </div>

                        <div className="logo-item">
                            <img src={logo5} alt="GoogleAnalytics" width="70"/>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </div>
    )
}

export default Partners