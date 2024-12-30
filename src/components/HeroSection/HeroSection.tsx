import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";
import { Link } from "react-router";

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p className={styles.tagline}>Best Import Export Solution</p>
          <h1 className={styles.title}>
            Reliable Services For <span>Your Business</span>
          </h1>
          <p className={styles.description}>
            We offer the best solutions for your import-export needs, ensuring
            smooth and hassle-free operations globally.
          </p>
          <button className={styles.ctaButton}>
            <Link
              to={"/contect"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              MEET WITH US{" "}
            </Link>
          </button>
        </div>
        <div className={styles.videoPlay}>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
