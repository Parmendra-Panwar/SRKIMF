import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import styles from "./ServicePage.module.css";
import servicesData from "./ServiceData"; // Import services data

const ServicePage: React.FC = () => {
  const { service } = useParams();
  const navigate = useNavigate();

  const selectedService = servicesData.find(
    (item) => item.path === `/services/${service}`
  );

  if (!selectedService) {
    return <p>Service not found</p>;
  }

  const phoneNumber = "7067416638";

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{selectedService.title} Transport</h2>
      <p className={styles.description}>{selectedService.tagline}</p>

      <div className={styles.productsContainer}>
        {selectedService.products.map((product) => {
          const whatsappMessage = `Hello! I am interested in the ${product.name} from your ${selectedService.title} transport services. Please provide more details.`;
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`;

          return (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productTagline}>{product.tagline}</p>
              <p className={styles.productPrice}>Price: {product.price}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButtonLink}
              >
                <button className={styles.whatsappButton}>
                  <FaWhatsapp className={styles.whatsappIcon} />
                  Contact on WhatsApp
                </button>
              </a>
            </div>
          );
        })}
      </div>

      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default ServicePage;
