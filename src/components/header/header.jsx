<<<<<<< HEAD
import React from 'react';
import styles from './header.module.css';
=======
import React from "react";
import styles from "./header.module.css";
>>>>>>> b226c19ae681961f3fa2f1ba17c66acd257cac0e

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;
