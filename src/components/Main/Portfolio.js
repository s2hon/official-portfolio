import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import project0 from '../../components/App/assets/images/projects/SushiJunai.gif'
import project1 from '../../components/App/assets/images/projects/Earbud.gif'

const Portfolio = ({ data }) => {
    return (
        <div id="portfolio" className="portfolio-area border-bottom pt-100 ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">PORTFOLIO</span>
                    <h2>I offer special skills to close the technology gap</h2>
                </div>
                
                <div className="row">
                    {data.majorprojects.map((item, i) => {
                        return(
                            <>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-10">
                                <h3 style={{color: "#BF0404"}}>{item.name}</h3>
                                <div className="portfolio-item">
                                    <div className="top">
                                        <img src={project0} alt="Sushi Junai" />
                                    </div>
                                    <div className="bottom">
                                        <div className="bottom-one">
                                            <h3>
                                                <a href={item.link} target="_blank">
                                                {item.company} <i className="flaticon-right-arrow"></i>
                                                </a>
                                            </h3>
                                            <a href={item.github} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                        </div>
                                        <div className="bottom-two">
                                            <p>{item.tools}</p>
                                        </div>
                                    </div>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            </>
                        )}
                    )}


                    {/* <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={portfolio4img} alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="/case-study-details">
                                            Food Illustration
                                        </Link>
                                    </h3>
                                    <span>Illustration</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <Link to="/case-study-details">
                                        Explore More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={portfolio5img} alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="/case-study-details">
                                            Package Design
                                        </Link>
                                    </h3>
                                    <span>Package</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <Link to="/case-study-details">
                                        Explore More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>

                <div className="text-center">
                    <AnchorLink className="common-btn three" href="#projects">
                        Explore More Work
                    </AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default Portfolio