import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className='footer'>
            <div className='content'>
                <h4>Let's turn ideas into reality</h4>
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
                <div className='down'>
                    <p>@Pranay Acharya Devarakonda. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
