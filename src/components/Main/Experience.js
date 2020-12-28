import React from 'react'

const Experience = ({ data }) => {
    return (
        <div className="experience-area three border-bottom-two ptb-100 pt-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">EXPERIENCE</span>
                    <h2>I Have 4+ Years Of Project Management Experience In Various Fields</h2>
                </div>

                <div className="experience-content">
                {data.experience.map((experience, i) => {
                        return(
                            <div className="experience-inner" key={i}>
                                <ul className="align-items-center">
                                    <li>
                                        <span>{experience.start} - {experience.end}</span>
                                    </li>
                                    <li>
                                        <span style={{color: "#dc3545"}}>{experience.role}</span><br/>
                                        <p>{experience.company}</p>
                                    </li>
                                    <li>
                                        {experience.description &&
                                        experience.description.map(item => 
                                            (<p>➡ {item}</p>))
                                        }
                                    </li>
                                </ul>
                            </div>
                    )}
                )}
                </div>
            </div>
        </div>
    )
}

export default Experience