import React from 'react'
import './certfy.css';
import py from './py.png';
import it from './it.png';
import c from './c.jpeg';
import mongo from './mongo.png';
import da from './da.png';
import mepro from './mepro.png';
import { motion } from "motion/react";

function Certifications() {
    return (
        <div className='main-cer'>
            <motion.div
                className='certifications'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='header'>
                    <h1>Certifications</h1>
                    <div className='underline'></div>
                </div>
                <div className='banner'>
                    <motion.div
                        className='card'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='certificate'>
                            <img
                                src={py}
                                alt='Programming Essentials in Python'
                            />
                        </div>
                        <div className='info'>
                            <h2>Programming Essentials in Python</h2>
                            <h4>Cisco Networking Academy</h4>
                        </div>
                    </motion.div>
                    <motion.div
                        className='card'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='certificate'>
                            <img
                                src={it}
                                alt='IT Essentials'
                            />
                        </div>
                        <div className='info'>
                            <h2>IT Essentials</h2>
                            <h4>Cisco Networking Academy</h4>
                        </div>
                    </motion.div>
                    <motion.div
                        className='card'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='certificate'>
                            <img
                                src={c}
                                alt='Programming Essentials in C'
                            />
                        </div>
                        <div className='info'>
                            <h2>Programming Essentials in C</h2>
                            <h4>Cisco Networking Academy</h4>
                        </div>
                    </motion.div>
                    <motion.div
                        className='card'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='certificate'>
                            <img
                                src={mongo}
                                alt='MongoDB'
                            />
                        </div>
                        <div className='info'>
                            <h2>MongoDB</h2>
                            <h4>ICT Academy</h4>
                        </div>
                    </motion.div>
                    <motion.div
                        className='card'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='certificate'>
                            <img
                                src={da}
                                alt='Data Analytics and Visualization'
                            />
                        </div>
                        <div className='info'>
                            <h2>Data Analytics and Visualization</h2>
                            <h4>Accenture</h4>
                        </div>
                    </motion.div>
                    <motion.div
                        className='card'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='certificate'>
                            <img
                                src={mepro}
                                alt='Mepro Pearson'
                            />
                        </div>
                        <div className='info'>
                            <h2>Mepro</h2>
                            <h4>Pearson</h4>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Certifications
