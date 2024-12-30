import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  terms: string;
  priceCalculator: string;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  terms,
  priceCalculator,
  path,
}) => {
  return (
    <Link
      to={path}
      style={{ textDecoration: "none", color: "inherit" }}
      className={styles.link}
    >
      <div className={styles.serviceCard}>
        <img className={styles.image} src={image} alt={title} />
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
        <p className={styles.terms}>{terms}</p>
        <p className={styles.priceCalculator}>{priceCalculator}</p>

        <button className={styles.contactButton}>Contact</button>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Transport by Road",
      description:
        "We provide reliable and efficient road transport services to ensure the safe and timely delivery of your goods...",
      image:
        "https://navata.com/cms/wp-content/uploads/2020/06/baba-transport-services-services-transport-sakinaka-in-andheri-east-mumbai_1565178231-s-1024x576.jpg",
      terms: "Terms: Delivery times are dependent on road conditions...",
      priceCalculator: "Estimated Price: Based on the distance traveled...",
      path: "/services/road",
    },
    {
      title: "Transport by Ocean",
      description:
        "We offer global ocean transport solutions for large cargo...",
      image:
        "https://cdn.britannica.com/06/166306-050-0D839F24/Cargo-ship-freight-containers.jpg",
      terms: "Terms: Delivery times depend on ocean conditions...",
      priceCalculator: "Estimated Price: Shipping costs start at $500...",
      path: "/services/ocean",
    },
    {
      title: "Transport by Air",
      description:
        "Our air transport service offers fast and reliable deliveries...",
      image:
        "https://blog.fhyzics.net/hubfs/Top%20Ten%20Characteristics%20of%20Air%20Transportation.png",
      terms: "Terms: Air transport is subject to flight schedules...",
      priceCalculator: "Estimated Price: Air shipping costs are calculated...",
      path: "/services/air",
    },
    {
      title: "Transport by Train",
      description:
        "Train transport offers an affordable and reliable way to move goods...",
      image: "https://3.imimg.com/data3/XG/XC/MY-3309749/transport-by-rail.jpg",
      terms:
        "Terms: Delivery times may vary depending on the train schedule...",
      priceCalculator:
        "Estimated Price: Train transport costs start at $150...",
      path: "/services/train",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            terms={service.terms}
            priceCalculator={service.priceCalculator}
            path={service.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
