import React from "react";
import styles from "./Servicces.module.css";
import { GiAirplaneDeparture, GiRoad, GiSailboat } from "react-icons/gi";
import { FaTrain } from "react-icons/fa";

const Servicces: React.FC = () => {
  return (
    <>
      <div className={styles.mainHeading}>
        <div className={styles.subMainHeading}>
          <GiAirplaneDeparture size={50} className={styles.icon} />
          <h3 className={styles.cttitle}>Air</h3>
          <h6>
            Great & Fastest way to transport, Great & Fastest way to transport
          </h6>
        </div>
        <div className={styles.subMainHeading} style={{ marginTop: "30px" }}>
          <GiRoad size={50} className={styles.icon} />
          <h3 className={styles.cttitle}>Road</h3>
          <h6>
            Convenient and flexible for short distances, Accessible everywhere
          </h6>
        </div>
        <div className={styles.subMainHeading}>
          <FaTrain size={50} className={styles.icon} />
          <h3 className={styles.cttitle}>Train</h3>
          <h6>Economical for long distances, Reliable and eco-friendly</h6>
        </div>
        <div className={styles.subMainHeading} style={{ marginTop: "30px" }}>
          <GiSailboat size={50} className={styles.icon} />
          <h3 className={styles.cttitle}>Ocean</h3>
          <h6>
            Ideal for heavy goods transport, Cost-effective for bulk items
          </h6>
        </div>
      </div>
      {/* <br />
      <div className={styles.whatwedo}>
        <img
          src="./images/whatwedo.png"
          alt="What_We_Do"
          className={styles.whatwedoImg}
        />
        <div className={styles.whatwedoText}>
          <h3 className={styles.whatwedoTitle}>What We Do</h3>
          <h6>
            Import-export businesses buy products or services from one country
            and sell them in another. They act as middlemen between
            manufacturers and customers in different countries.
          </h6>
          <h6>
            Import-export businesses can succeed by understanding consumer
            expectations, managing trade laws, and building strong relationships
            with customers and suppliers
          </h6>
          <h3>How to start one</h3>

          <button className={styles.ctaButton}>Explore</button>
        </div>
      </div> */}
    </>
  );
};

export default Servicces;
