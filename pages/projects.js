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
      <h1 className="text-6xl">Projects</h1>
      <br />
      <div className={styles.projectWrapper}>
        <img src="../images/aheathcotept.jpg" />
        <br />
        <h2 className="text-xl font-bold">Adam Heathcote Personal Training</h2>
        <br />
        <p>
          Adam Heathcote is a personal trainer who works with clients 1 to 1, or
          in group sessions. I created this website for him last year, March
          2020. The website features a way for clients to contact him via a
          contact form, as well as a blog section where he can log in as an
          administrator, create/edit or delete blog posts.
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
        <h2 className="text-xl font-bold">1st Davyhulme Scout Group</h2>
        <br />
        <p>
          1st Davyhulme Scout group is a scout group based in Davyhulme, which I
          attended throughout my childhood. As a way to give back to the
          community I created them a website.
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
