import React, { useState } from "react";
import {
  FaAmazon,
  FaApple,
  FaMicrosoft,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { AiOutlineAlibaba } from "react-icons/ai";
import { SiSamsung } from "react-icons/si";
import styles from "./WhatClientSays.module.css";

const WhatClientSays: React.FC = () => {
  const items = [
    { icon: <FaAmazon size={45} /> },
    { icon: <FaApple size={45} /> },
    { icon: <FaMicrosoft size={45} /> },
    { icon: <FaGoogle size={45} /> },
    { icon: <FaFacebook size={45} /> },
    { icon: <SiTesla size={45} /> },
    { icon: <AiOutlineAlibaba size={45} /> },
    { icon: <SiSamsung size={45} /> },
  ];

  const clientFeedback = [
    {
      img: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.jpg?s=612x612&w=0&k=20&c=GPniKSszzPgprveN7sCT5mb-_L3-RSlGAOAsmoDaafw=",
      name: "John Doe",
      feedback:
        "Amazing service! Highly recommend to everyone. The team was very professional and efficient.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_JP3p8M52qy4TQGX6-OEwiikpxjc-hiJIA&s",
      name: "Jane Smith",
      feedback:
        "Great experience! Exceptional quality and prompt responses to queries.prompt responses to queries",
    },
    {
      img: "https://www.man-shop.eu/media/db/93/05/1726129673/MAN%20Lifestyle%20Merchandising%20Shop%20Bekleidung%20Herren.png",
      name: "David Brown",
      feedback:
        "Outstanding results. Truly exceeded our expectations in every way.prompt responses to queries",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg/800px-Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg",
      name: "Emily Clark",
      feedback:
        "Reliable and trustworthy. Would definitely work with them again!prompt responses to queries",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.mmWhatThaySays}>
      <div className={styles.wrapper}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.itemLeft} ${styles[`item${index + 1}`]}`}
          >
            {item.icon}
          </div>
        ))}
      </div>
      <div className={styles.feedbackSection}>
        <div className={styles.card}>
          <img
            src={clientFeedback[currentIndex].img}
            alt={`${clientFeedback[currentIndex].name}'s profile`}
            className={styles.profileImage}
          />
          <h3>{clientFeedback[currentIndex].name}</h3>
          <p>{clientFeedback[currentIndex].feedback}</p>
        </div>
        <div className={styles.dots}>
          {clientFeedback.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatClientSays;
