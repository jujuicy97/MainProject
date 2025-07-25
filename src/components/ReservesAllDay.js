import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { PiWarningFill } from "react-icons/pi";
import { getUserInfo } from "../utils/LocalStorage";
import { reserveAndPay } from "../utils/ParkingAPI";
import { useNavigate } from "react-router-dom";
import { PiWarningCircleFill } from "react-icons/pi";

const ReservesAllDay = () => {
  const [date, setDate] = useState(''); // 현재 날짜 관리
  const [startTime, setStartTime] = useState('00:00'); // 시작 시간관리
  const [endTime, setEndTime] = useState('23:59'); // 종료 시간관리
  const [maxPrice, setMaxPrice] = useState(15000); // 일 최대 요금
  const [user, setUser] = useState(null); // 유저 정보 관리
  const [selectDate, setSelectDate] = useState(''); // 선택 날짜와 요일 정보 관리 1
  const [selectDay, setSelectDay] = useState(''); // 선택 날짜만 정보 관리
  // const [selectArea , setSelectArea] = useState(''); // 선택한 자리 관리
  const [popUp, setPopUp] = useState(false); // 팝업 상태 관리
  const navigate = useNavigate('');


  // ↓↓ 유저 정보 불러오기
  useEffect(() => { 
    const saved = getUserInfo();
    setUser(saved);
  }, []);

  // ↓↓ 현재 날짜 불러오기
  useEffect(() => {  
    const today = new Date(); //현재 날짜 불러오기
    const year = today.getFullYear(); // 현재 연도 불러오기
    const month = today.getMonth() + 1; // 현재 월 불러오기 0부터 시작함으로 +1주기
    const date = today.getDate(); // 현재 일 불러오기
    const day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][today.getDay()];
    setDate(`${year}년 ${month}월 ${date}일 ${day}`);
    setSelectDate(`${month}월 ${date}일 ${day}`);
    setSelectDay(`${month}월 ${date}일`);
  }, [])

  //↓↓ 다음 버튼을 클릭했을때 처리
  const handleClick = async () => { 
    //api에 전달하기 위한 형태로 만들기
    const currentYear = new Date().getFullYear(); 
    // 2025년 7월 25일 00:00:00
    const fullStartTime =  `${currentYear}년 ${selectDate} ${startTime}:00`;
    // 2025년 7월 25일 23:59:00
    const fullEndTime =  `${currentYear}년 ${selectDate} ${endTime}:00`;
    const { date, error } = await reserveAndPay({
      userID: user,
      // parkareaID : SelectArea, // ✨자리정보 받아와서 저장하기
      startTime: fullStartTime,
      endTime: fullEndTime,
      amount: maxPrice
    });
    if (error) {
      setPopUp(true); // 에러 팝업 창 열어주기
      return
    }
    if (date) {
      navigate('/'); // ✨다음페이지로 넘겨주기
    }
    console.log(user,maxPrice) // 정보 받아온 후 제대로 값이 나오는지 확인
  }

  return (
    <div className="reserves-day">
      <div className={`pop ${popUp ? "active" : ''}`}>
        <div className="pop-up">
        <p><PiWarningCircleFill /></p>
        <p>결제를 처리할 수 없습니다</p>
        <button onClick={()=>{setPopUp(false)}}>닫기</button>
         </div>
      </div>
      <p><FaRegCalendarAlt /> {date}</p>
      <h2><span><GoClockFill /></span> 이용시간 선택</h2>
      <div className="day-seat">
        <p>선택한자리</p>
        {/* <h1>{selectArea}</h1>   // 정보 받아오면 적용해보기  */}
        <h1>A-20</h1>
      </div>
      <div className="day-btn">
        <button
        onClick={()=>{navigate('/reservesTime')}}
        ><GoClockFill /> 시간제</button>
        <button
          onClick={() => { navigate('/reservesAllDay') }}
        ><FaRegCalendarAlt /> 일일권</button>
      </div>
      <div className="day-day">
        <p>선택한 날짜</p>
        <p>{selectDate}</p>
      </div>
      <div className="day-time">
        <p>이용시간</p>
        <p>{selectDay} {startTime} - {selectDay} {endTime}</p>
      </div>
      <div className="day-info">
        <h5><PiWarningFill /> 주차장 이용 안내</h5>
        <p>예약 시간 이후 출차 시 추가 요금은 현장 결제해야 해요</p>
        <p>최초 1시간 2,000원 이후 30분당 1,000원이 부과돼요</p>
      </div>
      <div className="day-price">
        <p><span>일일권</span> 이용 금액</p>
        <h5>{maxPrice.toLocaleString("ko-KR")}원</h5>
      </div>
      <button
        onClick={handleClick}
        className="day-nextBtn"
      >다음으로</button>
    </div>
  );
};

export default ReservesAllDay;
