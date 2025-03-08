import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src="/assets/about/software.png" 
                alt="Software Wallpaper." 
                className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="/assets/about/DevelopmentIcon.png" alt="Development icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Development Experience</h3>
                            <ul>
                            <li>Frontend using React, HTML, CSS, and JavaScript.</li>
                            <li>Projects using Java and Python</li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="/assets/about/TeacherIcon.png" alt="Teach icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Teaching Experience</h3>
                            <ul>
                            <li>4 years teaching Math</li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="/assets/about/BusinessIcon.png" alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Business Manager</h3>
                            <ul>
                            <li>6 years managing own multiple businesses</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
 
    </section>
    );
};