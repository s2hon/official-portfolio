import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import data from "../App/assets/data/profile.json"
import project0 from '../../components/App/assets/images/projects/SushiJunai.gif'
import project1 from '../../components/App/assets/images/projects/Earbud.gif'

const CaseStudy = () => {
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
                                <img src={project0} alt="Sushi Junai" />
                                <div className="inner">
                                    <div className="inner">
                                        <a href={data.majorprojects[0].github} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                        <h3>
                                            <a href={data.majorprojects[0].link} target="_blank">
                                            Explore <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </h3>
                                        <h5 className="case-study-title">{data.majorprojects[0].company}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span>{data.majorprojects[0].tools}</span>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-content">
                            <h3 className="case-study-title">{data.majorprojects[0].name}</h3>
                            <p>{data.majorprojects[0].description}</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-content">
                            <h3 className="case-study-title">{data.majorprojects[1].name}</h3>
                            <p>{data.majorprojects[1].description}</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src={project1} alt="Sushi Junai" />
                                <div className="inner">
                                    <div className="inner">
                                        <a href={data.majorprojects[1].github} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                        <h3>
                                            <a href={data.majorprojects[1].link} target="_blank">
                                            Explore <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </h3>
                                        <h5 className="case-study-title">{data.majorprojects[1].company}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span>{data.majorprojects[1].tools}</span>
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
        </div>
    )   
}

export default CaseStudy