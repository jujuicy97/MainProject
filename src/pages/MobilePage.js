import { Route, Routes } from "react-router-dom";
import FloorSelect from "../mobile/FloorSelect";
import ParkingSelect from "../mobile/ParkingSelect";
import ScheduleSelect from "../mobile/ScheduleSelect";
import { useState } from "react";

const MobilePage = () => {
  //날짜, 구역, 좌석 상태 관리
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedZoneSeats, setSelectedZoneSeats] = useState([]);
  
  return (
    <div className="mobile-page">
      <Routes>
        <Route path="/" element={<ScheduleSelect selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>}/>
        <Route path="/floorSelect" element={<FloorSelect 
                                    selectedDate={selectedDate}
                                    selectedZone={selectedZone}
                                    setSelectedZone={setSelectedZone}
                                    selectedZoneSeats={selectedZoneSeats}
                                    setSelectedZoneSeats={setSelectedZoneSeats}
                                  />}/>
        <Route path="/parkingSelect" element={<ParkingSelect 
                                      selectedZone={selectedZone}
                                      selectedZoneSeats={selectedZoneSeats}
                                  />
                                }
                              />
      </Routes>
    </div>
  );
};

export default MobilePage;