// floorSelect에서 ParkingSelect ParkingSelect selectedZoneSeats
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import IconTitle from "./IconTitle";

const ParkingSelect = () => {
  const location = useLocation();
  const { selectedZone, selectedZoneSeats } = location.state || {};
  // console.log(selectedZone, selectedZoneSeats); //floorSelect에서의 정보가 잘 불러와짐!
  const { zone } = useParams();
  return (
    <div className="parking-select">
      <div className="top-benner"></div>
      
        {/* <div className="top-wrap">
          <div className="top1">
            <FaRegCalendarAlt />
            <p>^날짜기능^2025년 7월 24일 목요일</p>
          </div>
          <div className="top2">
            <FaMapMarkerAlt />
            <h2>이용 구역 선택</h2>
          </div>
        </div>       */}
        <IconTitle title={`${selectedZone}구역 주차 자리 선택`}/>
    </div>
  );
};

export default ParkingSelect;