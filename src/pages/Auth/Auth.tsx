import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setUser, clearUser } from "../../app/userSlice";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const idd = Math.random().toString().slice(2, 8);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const simulatedResponse = {
      user: {
        _id: idd,
        email: formData.email,
        username: isLogin ? "ExistingUser" : formData.username,
        orders: [],
      },
      message: isLogin ? "Logged in successfully!" : "Signed up successfully!",
    };

    dispatch(setUser(simulatedResponse.user));
    alert(simulatedResponse.message);

    navigate("/mee");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{isLogin ? "Login" : "Sign Up"}</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.input}
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          )}
          <button type="submit" className={styles.button}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className={styles.toggle} onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </div>
        {user && (
          <div className={styles.welcome}>
            Welcome, {user.username || user.email}!
            <button
              onClick={() => dispatch(clearUser())}
              className={styles.logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
