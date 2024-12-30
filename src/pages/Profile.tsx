import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import styles from "./Profile.module.css";
import { clearUser } from "../app/userSlice";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Profile</h1>
        <h2 className={styles.title}>No User Logged In</h2>
        <p className={styles.message}>Please log in to see your profile.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, {user.username}!</h1>
      <div className={styles.info}>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Orders:</strong>{" "}
          {user.orders.length > 0
            ? user.orders.map((order, index) => (
                <span key={index}>
                  {order.item} (x{order.quantity})
                </span>
              ))
            : "No orders yet"}
        </p>
        <button onClick={() => dispatch(clearUser())} className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
