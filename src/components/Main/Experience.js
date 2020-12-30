import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBuilding,
    faCalendarAlt,
    faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons"



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
                                    <span><FontAwesomeIcon icon={faCalendarAlt} size="1x" /> {experience.start} - {experience.end}</span>
                                    </li>
                                    <li>
                                        <h5 style={{color: "#dc3545"}}>{experience.role}</h5>
                                    </li>
                                </ul>
                                <ul className="align-items-center">
                                    <li></li>
                                    <li>
                                        <p className="second"><FontAwesomeIcon icon={faBuilding} size="1x"/> {experience.company}</p> 
                                        <p className="second"><FontAwesomeIcon icon={faMapMarkerAlt} size="1x"/> Austin, TX</p>
                                    </li>
                                    {experience.description &&
                                        experience.description.map(item => 
                                            (<p style={{marginBottom: "0px"}}>* {item}</p>))
                                    }
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