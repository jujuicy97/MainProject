import { Route, Routes, useNavigate } from "react-router-dom";
import MyPageHome from "./MyPageHome";
import Reservations from "./Reservations";
import Cancel from "./Cancel";
import { useState } from "react";

const MyPage = () => {
  const navigate = useNavigate();
  const [cancel, setCancel] = useState([]);

  const handleCancel = (item) => {
    setCancel(item);
    localStorage.setItem("cancelData", JSON.stringify(item));
    navigate("/cancel")
  };

  return (
    <>
    {/* <LoginTest /> */}
    <div id="mypage">
      <Routes>
        {/* mypage 접속 시 첫 화면에 MyPageHome이 기본값으로 보여짐 */}
        <Route index element={<MyPageHome />} />
        <Route path="reservation" element={<Reservations onCancel={handleCancel}/> } />
        <Route path="cancel" element={<Cancel />} />
      </Routes>
    </div>
    
    </>

  );
};

export default MyPage;