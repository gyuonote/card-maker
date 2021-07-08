<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
=======
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
>>>>>>> b226c19ae681961f3fa2f1ba17c66acd257cac0e

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
<<<<<<< HEAD
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
=======
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
>>>>>>> b226c19ae681961f3fa2f1ba17c66acd257cac0e
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
<<<<<<< HEAD
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
=======
>>>>>>> b226c19ae681961f3fa2f1ba17c66acd257cac0e
      <Footer />
    </section>
  );
};

export default Maker;
