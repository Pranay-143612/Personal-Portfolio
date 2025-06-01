import React from 'react'
import './skills.css';
import { motion } from "motion/react"

function Skills() {
    return (
        <div className='main-skill'>
            <motion.div
                className='skills'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='header'>
                    <h1>Skills & Strengths</h1>
                    <div className='underline'></div>
                </div>
                <div className='skills-info'>
                    <div className='skill-divs'>
                        <div className='skill-name'>
                            <h3>Programming Languages</h3>
                        </div>
                        <div className='skills-list'>
                            <p>Python</p>
                            <p>JavaScript</p>
                            <p>Java</p>
                            <p>C- language</p>
                        </div>
                    </div>
                    <div className='skill-divs'>
                        <div className='skill-name'>
                            <h3>Web Development</h3>
                        </div>
                        <div className='skills-list'>
                            <p>React.js</p>
                            <p>Redux</p>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>MongoDB</p>
                            <p>HTMl & CSS</p>
                        </div>
                    </div>
                    <div className='skill-divs'>
                        <div className='skill-name'>
                            <h3>AI & Ml</h3>
                        </div>
                        <div className='skills-list'>
                            <p>Machine Learning Algorithms</p>
                            <p>Computer Vision</p>
                            <p>NumPy</p>
                            <p>Pandas</p>
                        </div>
                    </div>
                    <div className='skill-divs'>
                        <div className='skill-name'>
                            <h3>version Controlling</h3>
                        </div>
                        <div className='skills-list'>
                            <p>Git</p>
                            <p>GitHub</p>
                        </div>
                    </div>
                    <div className='skill-divs'>
                        <div className='skill-name'>
                            <h3>Other Skills</h3>
                        </div>
                        <div className='skills-list'>
                            <p>Data Structures & Algoritms</p>
                            <p>Problem Solving</p>
                            <p>Teamwork</p>
                            <p>Communication</p>
                            <p>Time Management</p>
                            <p>Adaptability</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Skills
