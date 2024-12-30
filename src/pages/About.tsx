import React from "react";
import styles from "./About.module.css";
import teamImage from "../assets/team.jpg";
import ceoImage from "../assets/ceo.jpg";
import missionImage from "../assets/mission.jpg";
import visionImage from "../assets/vision.jpg";
import { Link } from "react-router";

const AboutSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading} style={{ fontWeight: "700" }}>
            WELCOME TO <span style={{ color: "black" }}>ORHAN TRADERS</span>
          </h1>
          <p className={styles.tagline}>
            Connecting businesses globally with efficient import and export
            solutions.
          </p>
        </div>
      </section>

      <section className={styles.whatWeDoSection}>
        <h2 className={styles.subHeading}>What We Do</h2>
        <div className={styles.splitContent}>
          <img src={missionImage} alt="Our Mission" className={styles.image} />
          <div className={styles.textContent}>
            <p className={styles.description}>
              Importing and exporting goods is the backbone of global commerce.
              We help businesses by sourcing products internationally, ensuring
              compliance with regulations, and delivering them to their
              destinations seamlessly. Whether you’re looking to expand your
              market or find reliable suppliers, we’ve got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.howWeHelpSection}>
        <h2 className={styles.subHeading}>How We Can Help You</h2>
        <div className={styles.helpGrid}>
          <div className={styles.helpCard}>
            <h3>Trusted Suppliers</h3>
            <p>
              We help you find reliable international suppliers to source
              quality products.
            </p>
          </div>
          <div className={styles.helpCard}>
            <h3>Documentation</h3>
            <p>
              Manage all your import/export paperwork and compliance
              hassle-free.
            </p>
          </div>
          <div className={styles.helpCard}>
            <h3>Logistics</h3>
            <p>
              Streamline shipping and delivery to ensure on-time arrival of
              goods.
            </p>
          </div>
          <div className={styles.helpCard}>
            <h3>Market Insights</h3>
            <p>
              Get expert insights to expand your business in the global market.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.visionMissionSection}>
        <div className={styles.splitContentReverse}>
          <img src={visionImage} alt="Our Vision" className={styles.image} />
          <div className={styles.textContent}>
            <h2 className={styles.subHeading}>Our Vision</h2>
            <p className={styles.description}>
              To create a seamless global trading experience where businesses of
              all sizes can thrive and connect effortlessly.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.subHeading}>Meet Our Team </h2>
        <div className={styles.splitContent}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Our experienced team is dedicated to helping your business thrive
              in the international market. We bring expertise and passion to
              every project we undertake.
            </p>
          </div>
          <img src={teamImage} alt="Our Team" className={styles.image} />
        </div>
      </section>

      <section className={styles.ceoSection}>
        <h2 className={styles.subHeading}>Message from Our CEO</h2>
        <div className={styles.splitContentReverse}>
          <img src={ceoImage} alt="Our CEO" className={styles.image} />
          <div className={styles.textContent}>
            <p className={styles.description}>
              "At Orhan Traders, we believe in breaking barriers and connecting
              businesses globally. Let us help you unlock new opportunities."
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Ready to Expand Your Business?</h2>
        <p className={styles.ctaDescription}>
          Join hands with us and explore endless possibilities in the global
          market.
        </p>
        <Link
          to={"/contact"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className={styles.ctaButton}>Contact Us</button>{" "}
        </Link>
      </section>
    </div>
  );
};

export default AboutSection;
