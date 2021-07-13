import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "gyuo",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "gyuo@gmail.com",
      message: "go for it",
      fileName: "gyuo",
      fileURL: null,
    },
    {
      id: "2",
      name: "gawan",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "gawan@gmail.com",
      message: "go for it",
      fileName: "gawan",
      fileURL: "gawan.png",
    },
    {
      id: "3",
      name: "junho",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "junho@gmail.com",
      message: "go for it",
      fileName: "junho",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>

      <Footer />
    </section>
  );
};

export default Maker;
