import { Route, Routes } from "react-router-dom";
import StartPage from "../mobile/StartPageMobile";

const MobilePage = () => {
  return (
    <div className="mobile-page">
      <Routes>
        <Route path="/" element={<StartPage />}/>
      </Routes>
    </div>
  );
};

export default MobilePage;