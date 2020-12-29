import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="common-right-text-two">
                <span>STACI <br /> SHON <br /> PROJECT <br /> MANAGER <br /> WEB <br /> DEVELOPER</span>
            </div>
            
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1><span>Staci</span> Shon</h1>
                            <p>Hello I am a <span>Full Stack Web Application Developer</span> with background in Business management and Entrepreneurship. With over 5 years of experience in the hospitality industry, I’ve been effectively and creatively problem solving to develop user friendly applications for small businesses.</p>

                            <div className="banner-btn-area">
                                <AnchorLink href="#contact" className="common-btn three">
                                    Connect With Me
                                </AnchorLink>
                                <a to="https://s2hon.github.io" className="common-btn banner-btn three">
                                    See Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner