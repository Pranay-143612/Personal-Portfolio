import React from 'react'
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react"

function Home() {
    return (
        <div className='home-main'>
            <motion.div
                className='Home'
            >
                <div className='text-wrapper'>
                    <h1>Hi, I'm<br></br><span className='name'>Pranay Acharya Devarakonda</span></h1>
                    <p>A passionate Computer Science student and aspiring Software Engineer with Expertise in full-stack development, AI and machine learning</p>
                    <div className='btn'>
                        <a href='#contact'><button>Get In Touch</button></a>
                    </div>
                    <div className='socials'>
                        <a title='Linkedin' href="https://www.linkedin.com/in/pranay-acharya-devarakonda/">in</a>
                        <a title='Email' href="https://mail.google.com/mail/?view=cm&to=pranayacharya2004@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a title='Github' href="https://github.com/Pranay-143612"
                            style={{
                                textDecoration: "Underline"
                            }}
                        >G</a>
                        <a title='+91 9912405709' href="tel:+919912405709"><FontAwesomeIcon icon={faPhone} /></a>
                    </div>
                </div>
            </motion.div >
        </div>
    )
}

export default Home
