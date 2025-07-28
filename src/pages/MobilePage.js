import { Route, Routes } from "react-router-dom";
import ReservesTime from "../components/ReservesTime";
import LoginTest from "../utils/LoginTest";
import ReservesAllDay from "../components/ReservesAllDay";
import MainPageMobile from "../components/MainPageMobile";
import HeaderMobile from "../components/HeaderMobile";


const MobilePage = () => {
  return (
    <div className="mobile-page">
      <HeaderMobile/>
      <Routes>
        <Route path="/" element={<LoginTest/>}/>
        <Route path="/reservesTime" element={<ReservesTime/>}/>
        <Route path="/reservesAllDay" element={<ReservesAllDay/>}/>
        {/* <Route path="/" element={<MainPageMobile/>}/> */}
      </Routes>
    </div>
  );
};

export default MobilePage;