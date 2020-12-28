import React from 'react'

const Education = () => {
    return (
        <div className="education-area three border-bottom-two ptb-100 pt-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">EDUCATION</span>
                </div>

                <div className="education-content">
                    <div className="education-inner">
                        <ul className="align-items-center">
                            <li>
                                <h5>The University of Texas at Austin - Center for Professional Education</h5>
                            </li>
                            <li>
                                <h2>Full-stack Web Development</h2>
                            </li>
                            <li className="right">
                                <h5>Sep 2020 - Dec 2020</h5>
                            </li>
                        </ul>
                        <ul>
                            <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</p>
                        </ul>
                    </div>

                    <div className="education-inner">
                        <ul className="align-items-center">
                            <li>
                                <h5>The University of Texas at Austin - Red McCombs School of Business</h5>
                            </li>
                            <li>
                                <h2>BBA-Business Administration and Management</h2>
                            </li>
                            <li className="right">
                                <h5>Aug 2013 - Fall 2018</h5>
                            </li>
                        </ul>
                        <ul className="description">
                            <p>Concentration in Entrepreneurship</p>
                            <a target="_blank" href="https://medium.com/genesis-program/announcing-the-genesis-investment-in-barkeep-d515127b3a5f">
                                <p>➡ Awarded $4,500 by the Genesis Program for Barkeep App</p>
                            </a>
                            <p>➡ Participant of YCombinator Startup School 2018</p> 
                            <p>➡ McCombs HKC Entrepreneur Summer Fellowship: Director’s Choice</p> 
                            <p>➡ Selected for Director’s Choice and awarded $3,000 by McCombs HKC Entrepreneur Summer Fellowship</p>
                            <p>➡ Placed in Top 6 during SXSW EDU/Blackstone Launchpad Pitch Competition</p> 
                        </ul>
                    </div>

                    <div className="education-inner">
                        <ul className="align-items-center">
                            <li>
                                <h5>San Diego State University World Campus</h5>
                            </li>
                            <li>
                                <h2>Meeting and Event Planning Certificate</h2>
                            </li>
                            <li className="right">
                                <h5>Aug 2020 - Present</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education