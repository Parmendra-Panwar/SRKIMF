import React, { useState, useEffect, useCallback } from "react"; // Importing necessary hooks from React
import { Link } from "react-router-dom"; // Importing Link component for navigation
import styles from "./Header.module.css"; // Importing CSS modules for styling
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the page is scrolled
  const [menuVisible, setMenuVisible] = useState(false); // State to control visibility of the mobile menu

  // Function to handle scroll event and update the state based on scroll position
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      // If the scroll position is more than 50px, mark as scrolled
      setIsScrolled(true);
    } else {
      setIsScrolled(false); // Otherwise, set as not scrolled
    }
  }, []);

  // Setting up the scroll event listener on mount and cleaning up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Adding the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleaning up the event listener on unmount
    };
  }, [handleScroll]);

  // Function to toggle the visibility of the mobile menu
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev); // Toggle the menu visibility state
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>ORHAN TRADERS</div>
      <nav className={`${styles.nav} ${menuVisible ? styles.show : ""}`}>
        <Link to="/" className={styles.link} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className={styles.link} onClick={toggleMenu}>
          About
        </Link>
        <div className={styles.dropdown}>
          <Link to="/services" className={styles.link} onClick={toggleMenu}>
            Services
          </Link>
          <div className={styles.dropdownMenu}>
            <ul>
              <Link
                to="/services/air"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={styles.dropdownItem}>Air</li>
              </Link>
              <Link
                to="/services/road"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={styles.dropdownItem}>Road</li>
              </Link>

              <Link
                to="/services/train"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={styles.dropdownItem}>Train</li>
              </Link>

              <Link
                to="/services/ocean"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={styles.dropdownItem}>Ocean</li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/contact" className={styles.link} onClick={toggleMenu}>
          Contact
        </Link>
        <Link to="/track-order" className={styles.link} onClick={toggleMenu}>
          Track Order
        </Link>
      </nav>
      {!user && (
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <button className={styles.ctaButton}>Login / SignUp</button>
        </Link>
      )}
      {user && (
        <Link to="/mee" style={{ textDecoration: "none", color: "inherit" }}>
          <button className={styles.ctaButton}>Profile</button>
        </Link>
      )}

      <div className={styles.togglerBtn} onClick={toggleMenu}>
        <div className={styles.chamchamchampa}></div>
        <div className={styles.chamchamchampa}></div>
        <div className={styles.chamchamchampa}></div>
      </div>
    </header>
  );
};

export default Header;
