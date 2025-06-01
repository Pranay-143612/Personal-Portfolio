import React from 'react'
import './projects.css';
import farm from './farm.jpg';
import autism from './autism.jpg';
import emp from './employe.jpg'
import { motion } from "motion/react"

function Projects() {
    return (
        <div className='main-pro'>
            <motion.div
                className='Projects'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='projects-info'>
                    <div className='header'>
                        <h1>My Projects</h1>
                        <div className='underline'></div>
                    </div>
                    <div className='projects-list'>
                        <motion.div
                            className='project-card'
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='image'>
                                <img
                                    src={farm}
                                    alt='Agritech Nexus'
                                />
                            </div>
                            <div className='project-text'>
                                <h2>Agritech Nexus</h2>
                                <p>AgriTech Nexus is a web-based platform built with React.js, CSS, Node.js, Firebase, and MongoDB to enable direct farmer-to-consumer sales, eliminating middlemen for fair pricing.
                                </p>
                                <div className='tools'>
                                    <p>React.js</p>
                                    <p>MongoDB</p>
                                    <p>Node.js</p>
                                    <p>Express.js</p>
                                    <p>Rest API</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className='project-card'
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='image'>
                                <img
                                    src={autism}
                                    alt='SPARK'
                                />
                            </div>
                            <div className='project-text'>
                                <h2>SPARK</h2>
                                <p>SPARK - Spectrum Profiling and Autism Recognition Kit<br></br>Which is used to detect presence of Autism by using questionnaire and computer vision analysis.
                                </p>
                                <div className='tools'>
                                    <p>Streamlit</p>
                                    <p>NumPy</p>
                                    <p>Pandas</p>
                                    <p>Computer Vision</p>
                                    <p>Tensorflow</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className='project-card'
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='image'>
                                <img
                                    src={emp}
                                    alt='ACEployee Management'
                                />
                            </div>
                            <div className='project-text'>
                                <h2>ACEployee Management</h2>
                                <p>It is a digital solution designed to handle employee-related operations such as onboarding, attendance tracking, salary processing etc.
                                </p>
                                <div className='tools'>
                                    <p>React.js</p>
                                    <p>Node.js</p>
                                    <p>Express.js</p>
                                    <p>MongoDB</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects
