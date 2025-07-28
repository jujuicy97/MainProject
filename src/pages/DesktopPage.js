import { Route, Routes } from "react-router-dom";
import StartPageD from "../desktop/StartPageD";

const DesktopPage = () => {
  return (
    <div className="desktop-page">
      <Routes>
        <Route path="/" element={<StartPageD/>}/>
      </Routes>
    </div>
  );
};

export default DesktopPage;