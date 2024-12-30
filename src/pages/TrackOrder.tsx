// import React, { useState, useEffect } from "react";
import styles from "./OrderPage.module.css";
import visionImage from "../assets/uc.png";
// Placeholder data (simulate an order)
// interface Order {
//   orderId: string;
//   date: string;
//   items: string[];
//   status: string;
//   totalPrice: number;
// }

// const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
//   return (
//     <div className={styles.orderCard}>
//       <h3 className={styles.orderId}>Order ID: {order.orderId}</h3>
//       <p className={styles.orderDate}>Order Date: {order.date}</p>
//       <ul className={styles.orderItems}>
//         {order.items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <p className={styles.orderStatus}>Status: {order.status}</p>
//       <p className={styles.orderTotal}>
//         Total Price: ${order.totalPrice.toFixed(2)}
//       </p>
//     </div>
//   );
// };

const OrderPage: React.FC = () => {
  // Placeholder data simulating an order from the server
  // const [orders, setOrders] = useState<Order[]>([]);

  // useEffect(() => {
  //   // Simulating a server response
  //   const fetchedOrders: Order[] = [
  //     {
  //       orderId: "ORD123456",
  //       date: "2024-12-20",
  //       items: ["Transport by Road", "Transport by Air", "Special Handling"],
  //       status: "In Transit",
  //       totalPrice: 350.5,
  //     },
  //     {
  //       orderId: "ORD123457",
  //       date: "2024-12-19",
  //       items: ["Transport by Ocean", "Cargo Insurance"],
  //       status: "Delivered",
  //       totalPrice: 500.75,
  //     },
  //     {
  //       orderId: "ORD123458",
  //       date: "2024-12-18",
  //       items: ["Transport by Train", "Packaging"],
  //       status: "In Progress",
  //       totalPrice: 200.0,
  //     },
  //     {
  //       orderId: "ORD123459",
  //       date: "2024-12-17",
  //       items: ["Transport by Road", "Cargo Insurance"],
  //       status: "Delivered",
  //       totalPrice: 450.25,
  //     },
  //   ];
  //   setOrders(fetchedOrders);
  // }, []);

  return (
    <div className={styles.container}>
      <img src={visionImage} alt="Our Mission" className={styles.usImg} />
      {/* <h2 className={styles.heading}>Under Construction</h2> */}
      {/* {orders.length === 0 ? (
        <p className={styles.noOrders}>You have no orders yet.</p>
      ) : (
        <div className={styles.ordersList}>
          {orders.map((order) => (
            <OrderCard key={order.orderId} order={order} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default OrderPage;
