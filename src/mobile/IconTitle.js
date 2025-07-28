import { useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

//날짜 정보 불러오기
const IconTitle = ({title, selectedDate}) => {
  if( !selectedDate ) return null;
  const propDate = selectedDate ? new Date(selectedDate) : new Date();
  const year = propDate.getFullYear();
  const month = propDate.getMonth() +1;
  const day = propDate.getDate();
  const weekday = propDate.toLocaleDateString("ko-KR", { weekday : "long"});
  const todayRow = `${year}년 ${month}월 ${day}일 ${weekday}`;

  return (
    <div className="top-wrapper">
      <div className="top1">
        <FaRegCalendarAlt />
        <p>{todayRow}</p>
      </div>
      <div className="top2">
        <FaMapMarkerAlt />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default IconTitle;
