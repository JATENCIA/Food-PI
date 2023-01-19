import React from "react";
import styles from "../Home/Home.module.css";

export function Loading() {
  return (
    <div id={styles.loading}>
      <img
        id={styles.imageLoading}
        src="https://cdn.dribbble.com/users/496146/screenshots/2331441/v1_animation_pizza.gif"
        alt="loading"
      />
    </div>
  );
}
