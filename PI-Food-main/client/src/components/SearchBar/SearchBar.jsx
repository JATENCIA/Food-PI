import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../actions";
import styles from "../SearchBar/SearchBar.module.css";

export function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(getRecipeByName(name));
    setName("");
  };

  return (
    <div id={styles.SearchBar}>
      <input
        id={styles.input}
        type="text"
        placeholder="Search Recipe..."
        onChange={(event) => handleInputName(event)}
        value={name}
      />
      <button
        id={styles.buttonSearch}
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        <img
          id={styles.img}
          src="https://cdn-icons-png.flaticon.com/128/1086/1086933.png"
          alt="icon"
          width="20px"
          height="20px"
        />
      </button>
    </div>
  );
}
