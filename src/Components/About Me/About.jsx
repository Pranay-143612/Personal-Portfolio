import React from 'react'
import './about.css';
import pic from './pic2.jpg';
import { motion } from "motion/react"

function About() {
    return (
        <div className='about-main'>
            <motion.div
                className='about'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='header'>
                    <h1>About Me</h1>
                    <div className='underline'></div>
                </div>
                <div className='about-text'>
                    <div
                        className='image'
                    >
                        <img
                            src={pic}
                        />
                    </div>
                    <motion.div
                        className='info'
                    >
                        <h3>Goal-oriented computer science Undergraduate</h3>
                        <p>Goal-oriented and passionate Computer Science undergraduate (B. Tech with 9.38 CGPA) aspiring for a Software Engineer role, with hands-on experience in web development, artificial intelligence, and machine learning. Skilled in C, Python, JavaScript, React.js, Frontend Development, Backend Development using Node.js, Express.js and MongoDB with additional knowledge of Git. Developed AI-powered applications using TensorFlow, OpenCV, Scikit-learn, and Pandas, applying computer vision and predictive modeling techniques. Known for strong problem-solving abilities, quick learning, and a commitment to delivering scalable, user-focused solutions.</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
