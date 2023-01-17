import React from "react";
import styles from "../NavBar/NavBar.module.css";
import { SearchBar } from "../SearchBar";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div id={styles.header}>
      <Link to={"/"} id={styles.link}>
        <div id={styles.divContainer}>
          <img
            id={styles.img}
            src={"https://static.thenounproject.com/png/2320442-200.png"}
            alt="Recipe"
            width="50px"
            height="50px"
          />
          <h2 id={styles.h1}>Recipe</h2>
        </div>
      </Link>
      <div id={styles.divButtonCreate}>
        <Link to={"/recipes"}>
          <button id={styles.buttonCreate}>Create a Recipe</button>
        </Link>
        <SearchBar />
      </div>
    </div>
  );
}
