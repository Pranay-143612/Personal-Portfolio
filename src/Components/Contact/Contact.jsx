import React, { useState } from 'react'
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react";



function Contact() {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    // });

    // const handleChange = (e) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         [e.target.name]: e.target.value,
    //     }));
    // };


    return (
        <div className='contact'>
            <div className='header'>
                <h1>Get In Touch</h1>
                <div className='underline'></div>
            </div>
            <div className='wrapper'>
                <motion.div
                    className='socials'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3>Let's Connect</h3>
                    <p>I'm currently available for internships, freelance opportunities or project collaborations. Feel free to reach out if you'd like to work together!</p>
                    <div className='links'>
                        <div className='link'>
                            <div className='logo'><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div className='link-info'>
                                <h4>Email</h4>
                                <p>pranayacharya2004@gmail.com</p>
                            </div>
                        </div>
                        <div className='link'>
                            <div className='logo'><FontAwesomeIcon icon={faPhone} /></div>
                            <div className='link-info'>
                                <h4>Phone</h4>
                                <p>+91 9912405709</p>
                            </div>
                        </div>
                        <div className='link'>
                            <div className='logo'><FontAwesomeIcon icon={faLocation} /></div>
                            <div className='link-info'>
                                <h4>Location</h4>
                                <p>Alar, Yadadri Bhongir Dist, Telangana</p>
                            </div>
                        </div>
                        <div className='link'>
                            <div className='logo'>in</div>
                            <div className='link-info'>
                                <h4>Linkedin</h4>
                                <p>www.linkedin.com/in/pranay-acharya-devarakonda/</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* <form>
                    <input
                        name='name'
                        placeholder='Your name'
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="email"
                        placeholder="Your email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="subject"
                        placeholder="Subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Send Message</button>
                </form> */}
            </div>
        </div>
    )
}

export default Contact
