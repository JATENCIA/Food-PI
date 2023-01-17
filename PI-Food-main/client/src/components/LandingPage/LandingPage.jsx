import React from "react";
import { Link } from "react-router-dom";
import styles from "../LandingPage/LandingPage.module.css";

export function LandingPage() {
  return (
    <div id={styles.background}>
      <div id={styles.container}>
        <h1 id={styles.h1}>WELCOME TO PI FOOD</h1>
      </div>
      <Link to="/home">
        <button id={styles.button}>START</button>
      </Link>
    </div>
  );
}
