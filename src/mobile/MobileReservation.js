import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ScheduleSelect from "./ScheduleSelect";
import FloorSelect from "./FloorSelect";
import ParkingSelect from "./ParkingSelect";

const MobileReservation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedZoneSeats, setSelectedZoneSeats] = useState([]);
  const [selectSeatID, setSelectSeatID] = useState(null);
  //날짜, 구역, 좌석 상태 관리
  const reservationState = {
    selectedDate,
    setSelectedDate,
    selectedZone,
    setSelectedZone,
    selectedZoneSeats,
    setSelectedZoneSeats,
    selectSeatID,
    setSelectSeatID    
  };
  
  return (
    <Routes>
      <Route
        path="schedule"
        element={
          <ScheduleSelect
          reservation={reservationState}
          />
        }
      />
      <Route
        path="floor"
        element={
          <FloorSelect
            reservation={reservationState}
          />
        }
      />
      <Route
        path="parking"
        element={
          <ParkingSelect
            reservation={reservationState}
          />
        }
      />
      {/* <Route
        path="time"
        element={
          <ReservesTime
            reservation={reservationState}
          />
        }
      />
      <Route
        path="allday"
        element={
          <ReservesAllDay
            reservation={reservationState}
          />
        }
      /> */}
    </Routes>
  );
};

export default MobileReservation;
