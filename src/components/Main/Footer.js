import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="copyright-area three">
                <div className="container">
                    <div className="copyright-item">
                        <p>&copy; {new Date().getFullYear()} | Made with <span style={{color: "#BF0404"}}> ❤ </span> by <a href="https://github.com/s2hon" target="_blank" rel="noreferrer">Staci Shon</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer