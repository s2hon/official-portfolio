import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import PortfolioImg from './ProjectImage';

const Projects = ({ data }) => {
    return (
        <div id="projects" className="projects-area border-bottom-two pt-100 ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">PROJECTS</span>
                    <h2>Here Are Some More Projects</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-7">
                        {data.bigprojects.map((item, i) => {
                            return(
                                <div className="projects-item" key={i}>
                                    <PortfolioImg type={item.img} />
                                    <div className="inner">
                                        <div className="inner">
                                            <a href={item.github} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                            <span>
                                                <a href={item.link} target="_blank">
                                                Explore <i className="flaticon-right-arrow"></i>
                                                </a>
                                            </span>
                                            <h3>{item.name}</h3>
                                        </div>
                                    </div>
                                </div>
    
                            )}
                        )}
                    </div>

                    <div className="col-sm-6 col-lg-5">
                    {data.smallprojects.map((item, i) => {
                            return(
                                <div className="projects-item two" key={i}>
                                    <PortfolioImg type={item.img} />
                                    <div className="inner">
                                        <div className="inner">
                                            <a href={item.github} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                            <span>
                                                <a href={item.link} target="_blank">
                                                Explore <i className="flaticon-right-arrow"></i>
                                                </a>
                                            </span>
                                            <h3>{item.name}</h3>
                                        </div>
                                    </div>
                                </div>
    
                            )}
                        )}
                    </div>
                </div>

                {/* <div className="text-center">
                    <Link to="/works" className="common-btn three">
                        Explore Projects
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Projects