import React from 'react'
import {Link} from 'gatsby'
import { useRecoilState } from 'recoil'
import {sModalState} from '../../utils/recoil-atoms'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faEnvelope,
  } from "@fortawesome/free-solid-svg-icons"
import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import resume from '../App/assets/data/profile'

const Navbar = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [sidebarModal, setSidebarModal] = useRecoilState(sModalState)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    const toggleModal = () => {
        setSidebarModal(!sidebarModal)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <nav id="navbar" className="navbar navbar-expand-lg pufo-aside bg-0f1d22">
                <div className="container">
                    <button 
                        onClick={toggleNavbar}
                        className={classTwo} 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <AnchorLink 
                                    // onClick={toggleNavbar} 
                                    offset={() => 100} 
                                    className="nav-link active" 
                                    href="#home"
                                >
                                    Home
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    // onClick={toggleNavbar} 
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#about"
                                >
                                    About
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    // onClick={toggleNavbar} 
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#portfolio"
                                >
                                    Portfolio
                                </AnchorLink>
                            </li>
                            {/* <li className="nav-item">
                                <AnchorLink 
                                    // onClick={toggleNavbar} 
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#blog"
                                >
                                    Blog
                                </AnchorLink>
                            </li> */}
                            <li className="nav-item">
                                <AnchorLink 
                                    // onClick={toggleNavbar} 
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#contact"
                                >
                                    Contact
                                </AnchorLink>
                            </li>
                        </ul>

                        <div className="aside-footer">
                            <Link to="#" className="common-btn three">
                                Download CV <i className='bx bxs-download'></i>
                            </Link>
                            <ul className="social">
                                <li><a href={resume.social.linkedinurl} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a></li>
                                <li><a href={resume.social.githuburl} target="_blank"><FontAwesomeIcon icon={faGithub} size="1x" /></a></li>
                                <li><a href={resume.social.facebookurl} target="_blank"><FontAwesomeIcon icon={faFacebookF} size="1x" /></a></li>
                                <li><a href={resume.social.twitterurl} target="_blank"><FontAwesomeIcon icon={faTwitter} size="1x" /></a></li>
                                <li><a href="mailto:staci.shon@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="1x" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Demos Modal */}
            <div className="demo-side-icon">
                <button type="button" className="modal-btn" 
                    onClick={toggleModal}
                >
                    <span>Contact Me</span>
                </button>
            </div>

        </React.Fragment>
    )
}

export default Navbar