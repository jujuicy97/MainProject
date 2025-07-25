import { useNavigate } from "react-router-dom";

import BottomNavBarMobile from "./BottomNavBarMobile";
import HeaderMobile from "./HeaderMobile";

import MainHeaderMobile from "./MainHeaderMobile";
import { BsStars } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { HiTicket } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";
import { FaCaretRight } from "react-icons/fa";

const MainPageMobile = () => {
  const navigate = useNavigate();
  return (
    <div id="main-page">
      <MainHeaderMobile />
      {/* <HeaderMobile/> */}
      <div className="welcome-banner">
        <div className="star-icon">
          <BsStars />
        </div>
        <p>사전 주차 예약으로 드림랜드를 편하게 즐겨보세요!</p>
      </div>
      <div className="zone-map">
        <p>주차 지도 들어가는 부분</p>
      </div>
      <div className="reservation-section">
        {/* 상단 예약하기 버튼 */}
        <button className="reserve-btn" onClick={() => navigate('/')}>
          <FaCar className="car-icon" />
          예약하기
        </button>

        {/* 안내 버튼들 */}
        <div className="info-buttons">
          <button className="info-btn" onClick={() => navigate('/')}>
            <HiInformationCircle className="icon" />
            주차 안내
          </button>
          <button className="info-btn" onClick={() => navigate('/')}>
            <HiTicket className="icon" />내 예약 내역
          </button>
        </div>

        {/* 더 많은 정보 */}
        <div className="more-info" onClick={() => navigate('/')}>
          더 많은 정보 보기
          <FaCaretRight className="icon" />
        </div>
      </div>
      <BottomNavBarMobile />
    </div>
  );
};

export default MainPageMobile;
