import React from "react";
import styles from "./Hobbies.module.css";

export const Hobbies = () => {
    return (
    <section className={styles.container} id="hobbies">
        <h2 className={styles.title}>Hobbies</h2>
            <div className={styles.content}>
                
                <ul className={styles.hobbiesItems}>
                    <li className={styles.hobbiesItem}>
                    <img 
                    src="/assets/hobbies/piano.jpg" 
                    alt="Playing piano." 
                    className={styles.hobbiesImage}
                    />
                        <div className={styles.hobbiesItemText}>
                            <h3>Piano</h3>
                            <p>
I am a pianist amazed by the magic of music. Playing the piano has shown me the beauty of life. When playing, I find myself in a state of deep reflection, finding solutions and ideas for professional and personal matters.
                            </p>
                        </div>
                    </li>
                    <li className={styles.hobbiesItem}>
                    <img 
                    src="/assets/hobbies/fulvo.jpg" 
                    alt="Playing piano." 
                    className={styles.hobbiesImage}
                    />
                        <div className={styles.hobbiesItemText}>
                            <h3>Soccer</h3>
                            <p>
                                I've been playing soccer since I was 5 years old. This sport has shown me the sense of teamwork, discipline, and perseverance.
                            </p>
                        </div>
                    </li>
                    <li className={styles.hobbiesItem}>
                    <img 
                    src="/assets/hobbies/libro.jpg" 
                    alt="Playing piano." 
                    className={styles.hobbiesImage}
                    />
                        <div className={styles.hobbiesItemText}>
                            <h3>Reading</h3>
                            <p>
                            Books are doors to other worlds. Reading allows me to think critically for myself and question the world around me.                            </p>
                        </div>
                    </li>
                </ul>
            </div>
 
    </section>
    );
};