import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo1 from '../../components/App/assets/images/logo/icons8-download-resume.svg'
import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import resume from '../App/assets/data/profile'
import axios from 'axios'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

    class ContactForm extends React.Component {
        constructor(props) {
            super(props);
            // this.state = {
            //     name: "",
            //     email: "",
            //     subject: "",
            //     number: "",
            //     message: ""
            // }
            this.state = {
                name: "",
                email: "",
                feedback: "",
            };
            }
        }

        handleInputChange(event) {
            event.preventDefault();
            const target = event.target;
            const name = target.name;
            const value = target.value;
        this.setState({ [name]: value });
        }

        // handleSubmit(e){
        //     e.preventDefault();
        //         axios({
        //         method: "POST", 
        //         url:"http://localhost:8000/send", 
        //         data:  this.state
        //         }).then((response)=>{
        //         if (response.data.status === 'success') {
        //             alert("Message Sent."); 
        //             this.resetForm()
        //         } else if (response.data.status === 'fail') {
        //             alert("Message failed to send.")
        //         }
        //         })
        //     }
        
        // resetForm(){
        //     this.setState({name: "", email: "", subject: "", number: "",message: ""})
        // }
    
        render () {
            return (
                <div id="contact" className="contact-area three border-bottom-two pt-100 pb-70">
                    <div className="container">
                        <div className="section-title three">
                            <span className="sub-title">CONTACT</span>
                            <h2>Want to grab coffee with me? Drop A Line Here</h2>
                        </div>
    
                        <div className="row align-items-center">
                            <div className="col-md-7 col-lg-6">
                                <form id="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <div className="form-group">
                                        <input 
                                            type="text"
                                            htmlFor="name"
                                            name="name" 
                                            className="form-control" 
                                            placeholder="Name" 
                                            value={this.state.name}
                                            onChange={this.onNameChange.bind(this)}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.name && 'Name is required.'}
                                        </div>
                                    </div>
    
                                    <div className="form-group">
                                        <input 
                                            type="email"
                                            htmlFor="exampleInputEmail1" 
                                            name="email"
                                            className="form-control" 
                                            placeholder="Email" 
                                            value={this.state.email}
                                            onChange={this.onEmailChange.bind(this)}
                                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.email && 'Email is required.'}
                                        </div>
                                    </div>
                        
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            htmlFor="subject"
                                            name="subject" 
                                            className="form-control" 
                                            placeholder="Subject" 
                                            value={this.state.subject}
                                            onChange={this.onSubjectChange.bind(this)}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.subject && 'Subject is required.'}
                                        </div>
                                    </div>
    
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            htmlFor="number"
                                            name="number" 
                                            className="form-control" 
                                            placeholder="Phone" 
                                            value={this.state.number}
                                            onChange={this.onNumberChange.bind(this)}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.number && 'Number is required.'}
                                        </div>
                                    </div>
                                
                                    <div className="form-group">
                                        <textarea 
                                            name="text" 
                                            htmlFor="message"
                                            className="form-control" 
                                            cols="30" 
                                            rows="6" 
                                            placeholder="Write message" 
                                            value={this.state.text}
                                            onChange={this.onMessageChange.bind(this)}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.text && 'Text body is required.'}
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
        onNameChange(event) {
            this.setState({name: event.target.value})
        }
      
        onEmailChange(event) {
            this.setState({email: event.target.value})
        }

        onSubjectChange(event) {
            this.setState({name: event.target.value})
        }
      
        onNumberChange(event) {
            this.setState({email: event.target.value})
        }
      
        onMessageChange(event) {
            this.setState({message: event.target.value})
        }
    }


export default ContactForm