import { Route, Routes } from "react-router-dom";
import StartPageD from "../desktop/StartPageD";
import MainPageD from "../desktop/MainPageD";

const DesktopPage = () => {
  return (
    <div className="desktop-page">
      <Routes>
        {/* <Route path="/" element={<StartPageD/>}/> */}
        <Route path="/" element={<MainPageD/>}/>
      </Routes>
    </div>
  );
};

export default DesktopPage;