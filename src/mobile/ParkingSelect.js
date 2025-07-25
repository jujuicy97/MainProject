// floorSelect에서 ParkingSelect ParkingSelect selectedZoneSeats
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import IconTitle from "./IconTitle";
import { FaCarSide } from "react-icons/fa6";
import { useState } from "react";

const ParkingSelect = ({ reservation }) => {
  const {
    selectedZone,
    selectedZoneSeats,
    selectSeatID,
    setSelectSeatID    
  } = reservation;
  // console.log(selectedZone, selectedZoneSeats); //floorSelect에서 내가 선택한 구역의 정보가 잘 불러와짐!

  //seat 3개 구간으로 나누기(임시 배열 변수 생성)
  const oneRow = selectedZoneSeats.filter((seat)=>{return seat.num >= 1 && seat.num <= 10});
  const twoRow = selectedZoneSeats.filter((seat)=>{return seat.num >= 11 && seat.num <= 20});
  const threeRow = selectedZoneSeats.filter((seat)=>{return seat.num >= 21 && seat.num <= 25});

  
  //예약이 가능한 seat만 선택이 되게 하는 함수(예약중, 예약불가능은 클릭 안됨)
  const handleSeatClick =(seat)=>{
    if( !seat.is_reserved ){
      setSelectSeatID(seat.id);
    }
  }

  const navigate = useNavigate();
  //reserveTime페이지로 넘어가는 다음으로 버튼
  const nextbtn =()=>{
    if( !selectSeatID ){
      alert("주차 자리를 선택해주세요");
      return;
    }
    navigate("/reserveTime", {
      state : { selectSeatID }
    })
  }

// console.log(oneRow);
  return (
    <div className="parking-select">
      <div className="top-benner"></div>
        <IconTitle title={`${selectedZone}구역 주차 자리 선택`}/>
        <div className="reserve-notice">
          <div><FaCarSide /> 예약 불가능</div>
          <div><FaCarSide />예약 가능</div>
          <div><FaCarSide />내 예약</div>
          <div><FaCarSide />현재 선택</div>
        </div>

        <div className="seat-grid" >
          { 
            oneRow.map((seat)=>{
              return (
                // ${seat.user_id && seat.user_id === mySelect ? "my-select" : "" } 아래 빈공간에 추가하기
                <div 
                  key={seat.id}
                  className={`seat 
                    ${seat.is_reserved ? "is_reserved" : "" } 
                    ${seat.id === selectSeatID? "selected" : "" }  
                    ${!seat.is_reserved && seat.id !== selectSeatID ? "available" : "" }  

                  `}
                  onClick={()=>{handleSeatClick(seat);}}
                >{seat.num}</div>)
            })
          }
        </div>
        <div className="seat-grid" >
          { 
            twoRow.map((seat)=>{
              return (
                <div 
                  key={seat.id}
                  className={`seat 
                    ${seat.is_reserved ? "is_reserved" : "" }
                    ${seat.id === selectSeatID? "selected" : "" }  
                    ${!seat.is_reserved && seat.id !== selectSeatID ? "available" : "" }  
                  
                  `}
                  onClick={()=>{handleSeatClick(seat);}}
                >{seat.num}</div>)
            })
          }
        </div>
        <div className="seat-grid" >
          { 
            threeRow.map((seat)=>{
              return (
                <div 
                  key={seat.id}
                  className={`seat 
                    ${seat.is_reserved ? "is_reserved" : "" } 
                    ${seat.id === selectSeatID? "selected" : "" }  
                    ${!seat.is_reserved && seat.id !== selectSeatID ? "available" : "" }  
                  `}
                  onClick={()=>{handleSeatClick(seat);}}
                >{seat.num}</div>)
            })
          }
        </div>
        <button className="next-btn" onClick={nextbtn}>
          다음으로
        </button>
    </div>
  );
};

export default ParkingSelect;