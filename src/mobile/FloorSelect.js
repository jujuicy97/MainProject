import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const FloorSelect = () => {
  return (
    <div className="floor-select">
      <h1 className="header-zone">header zone</h1>

      <div className="top-benner">
        <div className="top1">
        <FaRegCalendarAlt />
        <p>^날짜기능^2025년 7월 24일 목요일</p>
        </div>
        <div className="top2">
          <FaMapMarkerAlt />
          <h2>이용 구역 선택</h2>
        </div>

        <p>사전 결제 ZONE</p>

      </div>
    </div>
  );
};

export default FloorSelect;
