import React from "react";
import Instance from "../components/ScheduleTemplate/Instance";
import styles from "../styles/template.module.scss";

const Main = () => {
  return (
    <div className={styles.ampmGrid}>
      <div
        style={{ height: "100%", paddingTop: "10%" }}
        className={styles.gridWrapp}
        id={styles.amGrid}
      >
        <h3>Am</h3>
        <Instance />
        <Instance />
        <Instance />
        <Instance />
        <Instance />
        <Instance />
      </div>
      <div
        style={{ height: "100%", paddingTop: "10%" }}
        className={styles.gridWrapp}
        id={styles.pmGrid}
      >
        <h3>Pm</h3>
        <Instance />
        <Instance />
        <Instance />
        <Instance />
        <Instance />
        <Instance />
      </div>
    </div>
  );
};

export default Main;
