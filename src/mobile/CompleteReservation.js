import { useEffect, useState } from "react";
import { getFinalAmountInfo, getPaymentInfo } from "../utils/LocalStorage";

const CompleteReservation = () => {
    const [reserveDate,setReserveDate] = useState(null);
    const [year,setYear] = useState(null);
    const [month,setMonth] = useState(null);
    const [date,setDate] = useState(null);
    const [payment,setPayment] = useState(null);
    const [zone,setZone] = useState(null);
    const [startTime,setStartTime] = useState(null);
    const [endTime,setEndTime] = useState(null);
    const [time,setTime] = useState(null);
    const [seatID,setSeatID] = useState(null);
    const amount = localStorage.getItem("final_amount");


    useEffect(()=>{
        const payment = getPaymentInfo();
        const year = new Date(payment.selectedDate).getFullYear();
        const month = new Date(payment.selectedDate).getMonth()+1;
        const date = new Date(payment.selectedDate).getDate();
        const reserveDate = new Date(payment.selectedDate).toLocaleDateString("ko-KR",{
            month:'long',
            day:'numeric',
            weekday: 'long'
        })
        const zone = payment.selectedZone;
        const startTime = payment.selectedStartTime;
        const endTime = payment.selectedEndTime;
        const time = payment.selectedTime;
        const seatID = payment.selectSeatID; 
        if(payment){
            setPayment(payment);
            setYear(year);
            setMonth(month);
            setDate(date);
            setReserveDate(reserveDate);
            setZone(zone);
            setStartTime(startTime);
            setEndTime(endTime);
            setTime(time);
            setSeatID(seatID);
        }
    },[])
    return (
        <div id="complete-reservation">
            <div className="top-com-re">
                <h2>예약이 완료되었어요!</h2>
            </div>
            <p>DreamLand에서 만나요!</p>
            <div>
                <div className="reserve-total-info">
                    <ul className="names-reserve">
                        <li>예약번호</li>
                        <li>예약일</li>
                        <li>예약시간</li>
                        <li>결제 금액</li>
                        <li>주차 위치</li>
                    </ul>
                    <ul className="saved-reserve">
                        <li>{year}{month}{date}{zone}{seatID}</li>
                        <li>{reserveDate}</li>
                        <li>{startTime} - {endTime} 총 {time}</li>
                        <li>{Number(amount).toLocaleString()}원</li>
                        <li>{zone}-{seatID}</li>
                    </ul>
                </div>
                <div className="show-area">
                    <p className="">A구역</p>
                    <p className="">B구역</p>
                    <p className="">C구역</p>
                    <p className="">D구역</p>
                </div>
                <div className="warn-payment">
                    <p>예약 시간 이후 출차 시 추가 요금은 현장 결제해야 해요</p>
                </div>
            </div>
            <div className="btn-reser-home">
                <button className="reser-b">내 예약 내역</button>
                <button className="tohome-b">홈화면으로</button>
            </div>
        </div>
    );
};

export default CompleteReservation;