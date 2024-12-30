import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import styles from "./ProductPage.module.css";
import productsData from "./data";

const ProductPage: React.FC = () => {
  const { product } = useParams<{ product: string }>();
  const navigate = useNavigate();

  const selectedCategory = productsData.find(
    (item) => item.path.split("/").pop() === product
  );

  if (!selectedCategory) {
    return <p>Product category not found</p>;
  }

  const phoneNumber = "7067416638"; // Your WhatsApp number

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{selectedCategory.title}</h2>
      <p className={styles.tagline}>{selectedCategory.tagline}</p>
      <div className={styles.productsContainer}>
        {selectedCategory.products.map((product) => {
          const whatsappMessage = `Hello! I am interested in the ${product.name} (${product.tagline}) priced at ${product.price}. Please provide more details.`;
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
              <p className={styles.productPrice}>{product.price}</p>
              <p className={styles.productTagline}>{product.tagline}</p>
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

export default ProductPage;
