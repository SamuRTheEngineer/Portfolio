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
                            I am a pianist amazed by the magic of music.
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
                                I've been playing soccer since I was 5 years old. 
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
                                Books are gates to other worlds.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
 
    </section>
    );
};