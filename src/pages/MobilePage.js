import { Route, Routes } from "react-router-dom";
import FloorSelect from "../mobile/FloorSelect";
import ParkingSelect from "../mobile/ParkingSelect";

const MobilePage = () => {
  return (
    <div className="mobile-page">
      <Routes>
        <Route path="/" element={<FloorSelect />}/>
        <Route path="/parkingSelect" element={<ParkingSelect />}/>
      </Routes>
    </div>
  );
};

export default MobilePage;