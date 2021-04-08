import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.navOuter}>
      <Link href="/">
        <a className={styles.homeLink}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.aboutLink}>About</a>
      </Link>
      <Link href="/blog">
        <a className={styles.blogLink}>Blog</a>
      </Link>
      <Link href="/projects">
        <a className={styles.projectsLink}>Projects</a>
      </Link>
    </nav>
  );
};

export default Nav;
