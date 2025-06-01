import React from 'react';
import './experience.css';
import { motion } from "motion/react"

function Experience() {
    const items = [
        {
            year: "2025",
            title: "SPARK - Spectrum Profiling & Autism Recognition Kit",
            description: `SPARK (Spectrum Profiling & Autism Recognition Kit) is an intelligent diagnostic platform developed using Python, TensorFlow, OpenCV, and Scikit-learn, designed to assist in early autism detection. It combines questionnaire-based analysis with facial expression recognition through computer vision to provide accurate behavioral profiling. The platform leverages machine learning models trained on diverse datasets for precise predictions, ensuring sensitivity to behavioral nuances. Real-time data processing and visualization are achieved using Pandas, Matplotlib, and Seaborn. With a focus on accessibility and accuracy, SPARK empowers clinicians and caregivers with reliable insights, enhancing early intervention and support for individuals on the autism spectrum.`,
        },
        {
            year: "Present",
            title: "AgriTech Nexus",
            description: `AgriTech Nexus is a web-based platform built with React.js, CSS, Node.js, Firebase, and MongoDB to enable direct farmer-to-consumer sales, eliminating middlemen for fair pricing.
            It fosters collaboration between farmers, agriculturists, and experts, providing a knowledge-sharing hub. The platform includes real-time seasonal crop updates and expert insights to improve agricultural efficiency.
            It ensures secure transactions and scalability using real-time API data fetching, Firebase and MongoDB. By leveraging modern technologies, AgriTech Nexus enhances decision-making and optimizes the agricultural supply chain.`,
        },
        // Add more items here as needed
    ];

    return (
        <div className='main-exp'>
            <motion.div
                className="experience"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='header'>
                    <h1>Experience</h1>
                    <div className='underline'></div>
                </div>
                <section className="timeline-section">
                    <motion.div
                        className="timeline-items"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {items.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className='year'><p>{item.year}</p></div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>
            </motion.div>
        </div>
    );
}

export default Experience;
