import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import resume from '../App/assets/data/profile'
import study1 from '../../components/App/assets/images/case-study/case-study1.jpg'
import study2 from '../../components/App/assets/images/case-study/case-study2.jpg'
import study3 from '../../components/App/assets/images/case-study/case-study3.jpg'

const CaseStudy = (data) => {
    return (
        <div className="border-bottom-two case-study-area pt-100 ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">Major Projects</span>
                    <h2>I offer special skills to close the technology gap.</h2>
                    <p>Here are some of my successful projects to date.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src={study2} alt="Work" />
                                <div className="inner">
                                    <span>React.JS, Redux, Node.JS, MySQL, Yelp API, Reactstrap, Sequelize</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-content">
                            <h3 className="case-study-title">Interactive Menu Web App</h3>
                            <p>As my first real world experience-I contacted my old job Sushi Junai-a popular all you can eat sushi joint in Austin TX-and offered them to create a web application. Under my lead, I-with 4 other classmates-developed a customized Sushi Junai app where customers can not only track their order history but also access favorites! The app is in 2nd iteration and more updates are still coming.</p>
                            <a href="https://github.com/s2hon/sushi-junai-official" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            <a href="https://sushi-junai.herokuapp.com/" target="_blank" className="case-study-btn">
                                Explore <i className="flaticon-right-arrow"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-content">
                            <h3 className="case-study-title">Interactive Menu Web App</h3>
                            <p>As my first real world experience-I contacted my old job Sushi Junai-a popular all you can eat sushi joint in Austin TX-and offered them to create a web application. Under my lead, I-with 4 other classmates-developed a customized Sushi Junai app where customers can not only track their order history but also access favorites! The app is in 2nd iteration and more updates are still coming.</p>
                            <a href="https://github.com/s2hon/sushi-junai-official" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            <a href="https://sushi-junai.herokuapp.com/" target="_blank" className="case-study-btn">
                                Explore <i className="flaticon-right-arrow"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src={study2} alt="Work" />
                                <div className="inner">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src={study2} alt="Work" />
                                <div className="inner">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-content">
                            <h3 className="case-study-title">Interactive Menu Web App</h3>
                            <p>As my first real world experience-I contacted my old job Sushi Junai-a popular all you can eat sushi joint in Austin TX-and offered them to create a web application. Under my lead, I-with 4 other classmates-developed a customized Sushi Junai app where customers can not only track their order history but also access favorites! The app is in 2nd iteration and more updates are still coming.</p>
                            <a href="https://github.com/s2hon/sushi-junai-official" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            <a href="https://sushi-junai.herokuapp.com/" target="_blank" className="case-study-btn">
                                Explore <i className="flaticon-right-arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <AnchorLink 
                        // onClick={toggleNavbar} 
                        offset={() => -1} 
                        className="common-btn three" 
                        href="#portfolio"
                    >
                        Explore More
                    </AnchorLink>
                </div>
            </div>
        </div>
    )   
}

export default CaseStudy