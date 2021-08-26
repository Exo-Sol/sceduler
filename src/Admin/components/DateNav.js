import styles from "../styles/Admin.module.scss";
import backArr from "../icons/backArrow.png";
import fwdArr from "../icons/forwardArrow.png";

const DateNav = ({ dayFwd, dayBack, selectedDay }) => {
  /////////////JSX variables/////////////////////////////////

  const backArrow = (
    <span className={styles.timeArrow} onClick={dayBack}>
      <img src={backArr} alt="arrow back" />
    </span>
  );

  const fwdArrow = (
    <span className={styles.timeArrow} onClick={dayFwd}>
      <img src={fwdArr} alt="arrow back" />
    </span>
  );
  /////////////////////////////////////////////////////////

  return (
    <div className={styles.dateNav}>
      {backArrow}
      {`${selectedDay.dayName}, ${selectedDay.day}/${selectedDay.month}`}
      {fwdArrow}
    </div>
  );
};

export default DateNav;
