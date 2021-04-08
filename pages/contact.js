import React from "react";
import InputField from "../components/InputField";
import Meta from "../components/Meta";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      className={styles.contact}
    >
      <Meta
        title="Contact | Leo Pettecrew"
        description="Get in touch with me!"
      />
      <h1 className={styles.contactTitle}>Contact</h1>
      <br />
      <form className={styles.contactForm}>
        <div className={styles.formLeft}>
          <InputField label="Name" />
          <InputField label="Email" />
          <InputField label="Phone" />
        </div>
        <div className={styles.formRight}>
          <textarea
            className={styles.message}
            placeholder="Message..."
          ></textarea>
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
