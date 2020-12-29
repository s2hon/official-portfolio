import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo1 from '../../components/App/assets/images/logo/icons8-download-resume.svg'
import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import withReactContent from 'sweetalert2-react-content'
import { useForm } from 'react-hook-form'
import resume from '../App/assets/data/profile'
import * as emailjs from "emailjs-com";
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully sent and I will back to you soon ❤ xoxo',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const INITIAL_STATE = {
    from_name: "",
    email: "",
    phone: "",
    message: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }


    const onSubmit = async e => {
        try {
            const { from_name, email, phone, message } = contact;
            const payload = { from_name, email, phone, message };
            console.log(payload)
            console.log(contact)

            const SERVICE_ID = "service_cxtvvm9";
            const TEMPLATE_ID = "template_vydq58h";
            const USER_ID = "user_ZQSDdDgoptUzuy6jwSMHv";

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID)
            .then(function(response) {
                console.log(response.status, response.text);
                setContact(INITIAL_STATE);
                alertContent();
                }, function(err) {
                    console.log('FAILED...', err);
                })
        } catch (error) {
            console.log(error)
        }
    };

        return (
            <div id="contact" className="contact-area three border-bottom-two pt-100 pb-70">
                <div className="container">
                    <div className="section-title three">
                        <span className="sub-title">CONTACT</span>
                        <h2>↓ the BEST time to call me</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-6">
                            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="from_name" 
                                        className="form-control" 
                                        placeholder="Name" 
                                        value={contact.from_name}
                                        onChange={handleChange}
                                    />
                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.from_name && 'Name is required.'}
                                    </div>
                                </div>
                                    
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Email" 
                                        value={contact.email}
                                        onChange={handleChange}
                                        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                    />
                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.email && 'Email is required.'}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        value={contact.phone}
                                        className="form-control" 
                                        placeholder="Phone" 
                                        onChange={handleChange}
                                    />
                                </div>
                            
                                <div className="form-group">
                                    <textarea 
                                        name="message" 
                                        className="form-control" 
                                        cols="30" 
                                        rows="6" 
                                        placeholder="Write me something, anything" 
                                        value={contact.message}
                                        onChange={handleChange}
                                    />
                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.message && 'Text body is required.'}
                                    </div>
                                </div>
                                    
                                <button type="submit" className="btn common-btn three">Send Message <span></span></button>
                            </form>
                        </div>

                        <div className="col-md-5 col-lg-6">
                            <div className="contact-content">
                                <div className="top">
                                    <ul>
                                        <li>
                                            <span>Phone:</span>
                                            <a href="tel:+19792195702">{resume.contact.phone}</a>
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            <a href="mailto:staci.shon@gmail.com">{resume.contact.email}</a>
                                        </li>
                                        <li>
                                            <span>City:</span>
                                            <a href="#" target="_blank">{resume.contact.location}</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bottom">
                                    <ul>
                                        <li>
                                            <a href={resume.social.linkedinurl} target="_blank">
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={resume.social.githuburl} target="_blank">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={resume.social.twitterurl} target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={resume.social.facebookurl} target="_blank">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img src={logo1} alt="resume" width="30"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default ContactForm