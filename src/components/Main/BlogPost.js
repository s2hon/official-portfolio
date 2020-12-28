import React from 'react'
import { Link } from 'gatsby'
import blog10 from '../../components/App/assets/images/blog/blog10.jpg'
import blog11 from '../../components/App/assets/images/blog/blog11.jpg'

const BlogPost = () => {
    return (
        <div id="blog" className="blog-area three border-bottom-two pt-100 pb-70">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">BLOG</span>
                    <h2>Read My Blog To Know More About My Design Process</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.</p>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="blog-item">
                            <div className="top">
                                <Link to="/blog-details">
                                    <img src={blog10} alt="Blog" />
                                </Link>
                                <h4>12 <span>Oct</span></h4>
                            </div>

                            <div className="bottom">
                                <h3>
                                    <Link to="/blog-details">
                                        How To Improve Design Sense & Skill To Manage Design Work
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>

                                <Link to="/blog-details" className="blog-btn">
                                    Read More <i className="flaticon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="blog-item">
                            <div className="top">
                                <Link to="/blog-details">
                                    <img src={blog11} alt="Blog" />
                                </Link>
                                <h4>13 <span>Oct</span></h4>
                            </div>

                            <div className="bottom">
                                <h3>
                                    <Link to="/blog-details">
                                        How Design Became Fun In My Life & Took The Empty Space Of Heart
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                
                                <Link to="/blog-details" className="blog-btn">
                                    Read More <i className="flaticon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost