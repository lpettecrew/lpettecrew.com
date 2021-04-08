import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.headerOuter}>
      <Meta />
      <header className={styles.headerInner}>
        <div
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos="zoom-out-right"
          data-aos-easing="ease-in-out"
          className={styles.headerLeft}
        >
          <h1 className={styles.title}>Leo Pettecrew</h1>
        </div>
        <div
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos="zoom-out-left"
          data-aos-easing="ease-in-out"
          className={styles.headerRight}
        >
          <h1 className={styles.title}>Web Developer</h1>
          <br />
          <p>Manchester, UK</p>
          <br />
          <p>
            Currently studying for my A levels: <br />
            Maths, Further Maths, Computer Science &amp; Psychology
          </p>
        </div>
        <div
          data-aos-delay="1200"
          data-aos-duration="800"
          data-aos="fade"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-in-out"
          className={styles.button}
        >
          <br style={{ clear: "both" }} />
          <Link href="/contact">
            <a className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Let's talk &rarr;
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
}
