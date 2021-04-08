import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      className={styles.projects}
    >
      <Meta
        title="Projects | Leo Pettecrew"
        description="Check out some of my awesome projects!"
      />
      <h1 className={styles.projectsTitle}>Projects</h1>
      <br />
      <div className={styles.projectWrapper}>
        <img src="../images/aheathcotept.jpg" />
        <br />
        <h2 className={styles.projectTitle}>
          Adam Heathcote Personal Training
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dolorem vitae, assumenda veritatis veniam ullam facilis expedita eos
          repellat accusamus, minus asperiores suscipit esse voluptatem
          dignissimos voluptatibus eveniet at officia.
        </p>
        <br />
        <a
          href="http://aheathcotept.co.uk"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Visit Site &rarr;
        </a>
      </div>
      <div className={styles.projectWrapper}>
        <img src="../images/1stdavyhulme.jpg" />
        <br />
        <h2 className={styles.projectTitle}>
          Adam Heathcote Personal Training
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dolorem vitae, assumenda veritatis veniam ullam facilis expedita eos
          repellat accusamus, minus asperiores suscipit esse voluptatem
          dignissimos voluptatibus eveniet at officia.
        </p>
        <br />
        <a
          target="_blank"
          href="http://1stdavyhulme.uk"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Visit Site &rarr;
        </a>
      </div>
    </div>
  );
}
