import React from "react";
import styles from "../styles/Admin.module.scss";

const Shifts = ({ shiftArr, shiftSelect }) => {
  const setShift = (s) => {
    shiftSelect(s);
  };

  return (
    <div className={styles.shiftArea}>
      <h4>Smjene</h4>
      <ul>
        {shiftArr.map((shift) => {
          return (
            <li key={shift.id} onClick={() => setShift(shift)}>
              {`${shift.start}-${shift.end}`}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shifts;
