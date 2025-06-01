import React from 'react'
import './education.css';
import logo from './image.png'
import { motion } from "motion/react"

function Education() {
    return (
        <div className='Education'>
            <div className='header'>
                <h1>Education</h1>
                <div className='underline'></div>
            </div>
            <motion.div
                className='edu-info'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='edu-card'>
                    <div className='logo'>
                        <img
                            src={logo}
                            alt='Ace Engineering College'
                        />
                    </div>
                    <div className='edu-content'>
                        <div className='year'><p>2022 - 2026</p></div>
                        <div className='course'><h1>Bachelor of Technology in Computer Science</h1></div>
                        <div className='clg-name'><h2>Ace Engineering College</h2></div>
                        <div className='courses'>
                            <p><span className='head'>CGPA:</span> 9.38/10.0</p>
                            <p><span className='head'>Key Courses:</span> Data Structures & Algorithms, Database Management System, Computer Networks, Operating Systems</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Education
