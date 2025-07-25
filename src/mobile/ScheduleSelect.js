import { useNavigate } from "react-router-dom";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import HeaderMobile from "./HeaderMobile";
import BottomNavBarMobile from "./BottomNavBarMobile";
import { FaRegCalendarAlt } from "react-icons/fa";


const ScheduleSelect = ({ setSelectedDate, selectedDate }) => {
  const navigate = useNavigate();

  const handleReserve = () => {
  navigate('/floorSelect', { state : {selectedDate}}); // 실제 구역 선택 페이지 경로로 변경
};

  // 오늘
  const today = new Date();
  // 다음 달 마지막날 계산 -> 한달 뒤 값은 null로하기 위해
  const maxDate = moment(today).add(30, "days").toDate();

  return (
    <div className="ScheduleSelect">
      <HeaderMobile />
      <h2 className="title">
        <FaRegCalendarAlt />
        예약 날짜 선택
      </h2>
      <Calendar
        onChange={(date) => setSelectedDate(date)}
        value={selectedDate || today}
        minDate={today} // 오늘 이후만 선택 가능
        maxDate={maxDate} // 오늘로부터 30일 후까지만 가능
        defaultActiveStartDate={today} // 시작 달은 현재 달
        view="month" // 항상 '월' 단위로 보기
        maxDetail="month" // '연도'로 넘어가지 않도록
        minDetail="month" // '일' 단위만 표시
        prev2Label={null} // 연도 이동 버튼 제거
        next2Label={null}
        formatDay={(locale, date) => moment(date).format("DD")}
      />
      <ul className="state">
        <li>
          <span></span>예약 가능
        </li>
        <li>
          <span></span>잔여 수량 없음
        </li>
        <li>
          <span></span>미운영/준비중
        </li>
      </ul>
      <button 
        className="reserve-btn"
        onClick={handleReserve}
      >예약하기</button>
      <BottomNavBarMobile />
    </div>
  );
};

export default ScheduleSelect;
