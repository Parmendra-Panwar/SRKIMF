import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.column}>
          <h2 className={styles.logo}>IMPORT EXPORT</h2>
          <p>
            Your trusted partner for worldwide logistics and transportation.
          </p>
          <p>
            Imports and exports are essential for economic growth and a balanced
            global economy.{" "}
            <span
              style={{
                color: "gray",
                fontWeight: "900",
                fontSize: "1rem",
              }}
            >
              Orhan Trader
            </span>
          </p>
          {/* <div className={styles.subscribe}>
            <input type="email" placeholder="Your Email Address" />
            <button>
              <FaPaperPlane />
            </button>
          </div> */}
        </div>

        {/* Quick Links Section */}
        <div className={styles.column}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.animatedList}>
            <li>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/track-order" className={styles.link}>
                Track Order
              </Link>
            </li>
            <li>
              <Link to="/login" className={styles.link}>
                LOGIN
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className={styles.column}>
          <h3 className={styles.sectionTitle}>Services</h3>
          <ul className={styles.animatedList}>
            <Link
              to={"/services/air"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>Air</li>
            </Link>
            <Link
              to={"/services/road"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>Road</li>
            </Link>
            <Link
              to={"/services/train"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>Train</li>
            </Link>
            <Link
              to={"/services/ocean"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>Ocean</li>
            </Link>
          </ul>
        </div>

        {/* Legal & Social Media Section */}
        <div className={styles.column}>
          <h3 className={styles.sectionTitle}>Legal</h3>
          <ul className={styles.animatedList}>
            <Link
              to="/policy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>Privacy Policy</li>
            </Link>
          </ul>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/paras.panwar.davm/">
              <FaInstagram />
            </a>
            <a href="https://x.com/Parmendra444">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} Import Export | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
