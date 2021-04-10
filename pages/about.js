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
      <h1 className="text-6xl">About</h1>
      <br />
      <p>
        Hi! I'm Leo, a web developer from Manchester. I work with a full stack,
        meaning I take care of both the front and the back end of a website.
        <br />
        At the moment, however, I'm just looking to focus on my studies - I'll
        likely start freelance work again in summer, 2021. So if you have any
        questions just send me a message and I'll get back to you :-)
      </p>
      <br />
      <p>
        I am constantly learning new technologies, but as of the present, I have
        strong knowledge of the following languages:
      </p>
      <ul className="list-disc">
        <li>HTML, CSS, JavaScript, TypeScript</li>
        <li>PHP</li>
        <li>JAM Stack (Next.js)</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>C++</li>
      </ul>
      <p>
        I've also got experience with database management on a small scale.
        Typically using PostgreSQL, or phpMyAdmin (if the project is using PHP)
        in conjuction with MySQL.
      </p>
      <br />
      <h2 className="text-3xl">Hobbies</h2>
      <br />
      <p>
        Outside my web dev life, I'm currently at Sixth form where I'm studying
        for my A-levels (Maths, Further Maths, Computer Science &amp;
        Psychology), which I am due to finish in 2022.
      </p>
      <p>I also enjoy lifting, reading and competing in coding competitions.</p>
      <p>
        In the future, when I've got more time I want to study machine learning
        as it's always interested me since I was young.
      </p>
    </div>
  );
}
