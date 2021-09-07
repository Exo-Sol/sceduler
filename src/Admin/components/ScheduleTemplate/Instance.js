import React from "react";
import styles from "../../styles/template.module.scss";

const Instance = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.box} id={styles.time}>
          Time
        </li>
        <li className={styles.box} id={styles.name}>
          <span>Name</span>
        </li>
        <li className={styles.box} id={styles.durat}>
          Du
        </li>
      </ul>
    </div>
  );
};

export default Instance;
