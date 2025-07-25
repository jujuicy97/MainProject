import { Route, Routes } from "react-router-dom";
import FloorSelect from "../mobile/FloorSelect";
import ParkingSelect from "../mobile/ParkingSelect";
import ScheduleSelect from "../mobile/ScheduleSelect";
import { useState } from "react";

const MobilePage = () => {
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
    <div className="mobile-page">
      <Routes>
        <Route path="/" element={<ScheduleSelect selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>}/>
        <Route path="/floorSelect" element={<FloorSelect reservation={reservationState} />} />  
        <Route path="/parkingSelect" element={<ParkingSelect reservation={reservationState} />}/>
      </Routes>
    </div>
  );
};

export default MobilePage;