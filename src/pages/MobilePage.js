import { Route, Routes } from "react-router-dom";
import FloorSelect from "../mobile/FloorSelect";

const MobilePage = () => {
  return (
    <div className="mobile-page">
      <Routes>
        <Route path="/" element={<FloorSelect />}/>
      </Routes>
    </div>
  );
};

export default MobilePage;