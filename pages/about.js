import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className={styles.about}
    >
      <Meta
        title="About"
        description="Hi! I'm Leo, a web developer from Manchester."
      />
      <h1 className={styles.aboutTitle}>About</h1>
      <br />
      <p>
        Hi! I'm Leo, a web developer from Manchester. I work with a full stack,
        meaning I take care of both the front and the back end of a website
      </p>
      <p>I have experience using a variety of technologies, including:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript (TypeScript)</li>
        <li>PHP</li>
        <li>Node.js</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>C++</li>
      </ul>
      <p>
        I've also got experience with database management on a small scale.
        Typically using PostgreSQL in conjuction with MySQL.
      </p>
      <br />
      <h2 className={styles.aboutSubTitle}>Hobbies</h2>
      <br />
      <p>
        Outside my web dev life, I'm studying for my A-levels (Maths, Further
        Maths, Computer Science &amp; Psychology), which I am due to finish in
        2022.
      </p>
      <p>I also enjoy lifting, reading and competing in coding competitions.</p>
      <p>
        In the future, when I've got more time I want to study machine learning
        as it's always interested me since I was young.
      </p>
    </div>
  );
}
