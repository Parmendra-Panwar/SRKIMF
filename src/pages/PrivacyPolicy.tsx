import React from "react";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.subheading}>
          At <span className={styles.highlight}>Orhan Traders</span>, we value
          your privacy and are committed to protecting your personal
          information.
        </p>
      </header>
      <section className={styles.content}>
        <h2 className={styles.sectionTitle}>Information We Collect</h2>
        <p className={styles.text}>
          We may collect the following information when you visit or interact
          with our website:
        </p>
        <ul className={styles.list}>
          <li>Your name, email address, and contact details.</li>
          <li>Details about your inquiries or transactions.</li>
          <li>Technical data, such as IP address and browser type.</li>
        </ul>

        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
        <p className={styles.text}>The information collected is used to:</p>
        <ul className={styles.list}>
          <li>Respond to your inquiries and provide support.</li>
          <li>Process and manage your orders.</li>
          <li>Enhance and personalize your experience.</li>
        </ul>

        <h2 className={styles.sectionTitle}>Sharing Your Information</h2>
        <p className={styles.text}>
          We do not sell your personal information to third parties. However, we
          may share data with trusted partners for:
        </p>
        <ul className={styles.list}>
          <li>Order fulfillment and shipping purposes.</li>
          <li>Payment processing.</li>
          <li>Compliance with legal obligations.</li>
        </ul>

        <h2 className={styles.sectionTitle}>Your Choices</h2>
        <p className={styles.text}>You can choose to:</p>
        <ul className={styles.list}>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving promotional emails.</li>
        </ul>

        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.text}>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className={styles.contact}>
          Email:{" "}
          <a href="mailto:yourcompanyemail@example.com" className={styles.link}>
            yourcompanyemail@example.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
