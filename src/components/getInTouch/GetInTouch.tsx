import React, { useState } from "react";
import styles from "./GetInTouch.module.css";

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:panwparmendra7@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=Name: ${encodeURIComponent(
      formData.name
    )}%0D%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.heading}>
          <span>Get In</span> <span className={styles.highlight}>Touch</span>
        </h1>
        <p className={styles.description}>
          Feel free to reach out to us with any questions or feedback!
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message (optional)"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className={styles.button}>
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className={styles.mapSection}>
        <h2>Find Us Here:</h2>
        <iframe
          className={styles.mappp}
          src="https://www.openstreetmap.org/export/embed.html?bbox=2.2943506%2C48.8588443%2C2.2953506%2C48.8598443&layer=mapnik&marker=48.8588443%2C2.2943506"
          title="Eiffel Tower"
        ></iframe>
      </div>
    </div>
  );
};

export default GetInTouch;
