import React, { useState, useEffect } from "react";
import styles from "./styles/Admin.module.scss";
import { usersArray, shiftArr } from "./Data";
import DateNav from "./components/DateNav";
import UserList from "./components/Users";
import Shifts from "./components/Shifts";

const AdminMain = () => {
  ///DATE NAVIGATION LOGIC LIFTED TO PARENT///////////////////////////////////
  //////////state that counts clicks from present day////////////////////////
  const [clickCount, setClickCount] = useState(0);

  //////////DATE FORMARING//////////////////////////

  const formatDate = (count) => {
    const dateObj = new Date(),
      dayNames = ["Ned", "Pon", "Uto", "Sri", "Cet", "Pet", "Sub"];
    if (clickCount !== 0) {
      console.log("dohvaceno");
      dateObj.setDate(new Date().getDate() + count);
    }

    return {
      day: dateObj.getDate(),
      month: dateObj.getMonth() + 1,
      dayName: dayNames[dateObj.getDay()],
      year: dateObj.getFullYear(),
    };
  };
  //////////////////////////////////////////////////////////////
  const [selectedDay, setSelectedDay] = useState(formatDate());

  // settin the displayed date <_> clicking day back or foward is hooked with useEffect to change state
  //witch is date displayed visualy

  useEffect(() => {
    setSelectedDay(formatDate(clickCount));
  }, [clickCount]);

  const dayFwd = () => {
    setClickCount((count) => count + 1);
  };

  const dayBack = () => {
    setClickCount((count) => count - 1);
  };
  ////////////////////////////////////////////////////////////////////////////
  ///////////END OF DATE NAVIGATION LOGIC////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////Building Shedule//////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  const [dayData, setDayData] = useState([
    {
      id: null,
      shift: {},
      worker: "",
      date: "",
    },
  ]);

  const shiftSelect = (s) => {
    console.log(s);
    if (true) {
      const newDayData = {
        id: Date.now(),
        shift: { ...s },
        worker: "",
        date: formatDate(clickCount),
      };
      console.log(newDayData);
      setDayData((prev) => {
        return [...prev, { ...newDayData }];
      });
    }
  };

  return (
    <div className={styles.adminWrap}>
      <UserList users={usersArray} />
      <main></main>

      <Shifts shiftArr={shiftArr} shiftSelect={shiftSelect} />

      <DateNav dayFwd={dayFwd} dayBack={dayBack} selectedDay={selectedDay} />
    </div>
  );
};

export default AdminMain;
