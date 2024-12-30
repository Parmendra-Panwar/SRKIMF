import React from "react";
import { Form, useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login successful!");
        // Optionally navigate to a new page on success
        navigate("/admin/dashboard"); // Example: redirect to dashboard after login
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error logging in");
      console.error("Login error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Admin Login</h2>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </Form>

      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
};

export default Admin;
