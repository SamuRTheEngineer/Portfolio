import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:samuramirez2006.com">samuramirez2006@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"/assets/contact/superprof.png"}
            alt="Superprof icon"
          />
          <a href="https://www.superprof.co/asesorias-particulares-matematicas-anos-dando-clases-teniendo-enfoque-comprension-real-sobre-los-temas.html">superprof.com/SamuelRamirez</a>
        </li>
        <li className={styles.link}>
          <img src={"/assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/SamuRTheEngineer">github.com/SamuRTheEngineer</a>
        </li>
      </ul>
    </footer>
  );
};