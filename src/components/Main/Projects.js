import React from 'react'
import project1 from '../../components/App/assets/images/projects/employee-directory.gif'
import project2 from '../../components/App/assets/images/projects/fitness-tracker.gif'
import project3 from '../../components/App/assets/images/projects/budget-tracker.png'
import project4 from '../../components/App/assets/images/projects/reservation.png'
import project5 from '../../components/App/assets/images/projects/Note-Taker.gif'

const Projects = () => {
    return (
        <div id="portfolio" className="projects-area border-bottom-two pt-100 ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">PROJECTS</span>
                    <h2>Here Are Some More Projects</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-7">
                        <div className="projects-item">
                            <img src={project1} alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <a href="https://s2hon.github.io/employee-directory/" target="_blank">
                                        Explore <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </h3>
                                    <span>Employee Directory</span>
                                </div>
                            </div>
                        </div>

                        <div className="projects-item">
                            <img src={project2} alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <a href="https://workout-tracker-20.herokuapp.com/" target="_blank">
                                        Explore <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </h3>
                                    <span>Fitness Tracker</span>
                                </div>
                            </div>
                        </div>

                        <div className="projects-item">
                            <img src={project5} alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <a href="https://note-taker-ver1.herokuapp.com/" target="_blank">
                                        Explore <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </h3>
                                    <span>Note Taker</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-5">
                        <div className="projects-item two">
                            <img src={project3} alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <a href="https://budget-tracker-v2.herokuapp.com/" target="_blank">
                                        Explore <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </h3>
                                    <span>Budget Tracker</span>
                                </div>
                            </div>
                        </div>

                        <div className="projects-item two">
                            <img src={project4} alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <a href="https://badabing-hotrestaurant.herokuapp.com/" target="_blank">
                                        Explore <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </h3>
                                    <span>Hot Restaurants Reservation App</span>
                                </div>
                            </div>
                        </div>
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