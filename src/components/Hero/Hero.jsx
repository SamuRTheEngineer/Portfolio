import React from "react";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Samuel Ramírez</h1>
            <h2 className={styles.subtitle}>Software Engineering student at EIA University</h2>
            <p className={styles.description}>
            I am passionate about Technology and Mathematics. I always push myself to do things the best way possible.
            </p>
            <a href="mailto:samuramirez2006@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src="/assets/hero/Professional-Rami.jpg" alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
};