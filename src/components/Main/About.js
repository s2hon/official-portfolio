import React from 'react'
import aboutImg from '../../components/App/assets/images/about4.jpg'
import resume from '../App/assets/data/profile'

const About = () => {
    return (
        <div id="about" className="about-area border-bottom-two three">
            <div className="container align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img-three">
                            <img src={aboutImg} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title three">
                                <span className="sub-title">ABOUT ME</span>
                                <h2>{resume.role}</h2>
                                <p>{resume.specification}</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    {/* <div className="left">
                                        <ul>
                                            <li>
                                                <span>Age:</span>
                                                26 Years
                                            </li>
                                            <li>
                                                <span>Address:</span>
                                                <a href="#" target="_blank">12/7, Mc Street, Canada</a>
                                            </li>
                                            <li>
                                                <span>Website:</span>
                                                <a href="http://drexia.com" target="_blank">www.drexia.com</a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>

                                <div className="col-lg-6">
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <span>City:</span>
                                                {resume.contact.location}
                                            </li>
                                            <li>
                                                <span>Phone:</span>
                                                <a href="tel:+19792195702">{resume.contact.phone}</a>
                                            </li>
                                            <li>
                                                <span>Email:</span>
                                                <a href="mailto:staci.shon@gmail.com">{resume.contact.email}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About