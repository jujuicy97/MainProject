import { useEffect, useState } from "react";
import { getPaymentInfo } from "../utils/LocalStorage";

const CompleteReservation = ({finalAmount}) => {
    const [reserveDate,setReserveDate] = useState(null);
    const [numDate,setNumDate] = useState(null);
    const [year,setYear] = useState(null);
    const [month,setMonth] = useState(null);
    const [date,setDate] = useState(null);

    useEffect(()=>{
        const payment = getPaymentInfo();
        const numDate = new Date(payment.selectedDate).toLocaleDateString("ko-KR");
        const year = new Date(payment.selectedDate).getFullYear();
        const month = new Date(payment.selectedDate).getMonth()+1;
        const date = new Date(payment.selectedDate).getDate();
        const reserveDate = new Date(payment.selectedDate).toLocaleDateString("ko-KR",{
            month:'long',
            day:'numeric',
            weekday: 'long'
        })
        if(payment){
            setNumDate(numDate);
            setYear(year);
            setMonth(month);
            setDate(date);
            setReserveDate(reserveDate);
        }
    },[])
    return (
        <div id="complete-reservation">
            <div className="top-com-re">
                <h2>예약이 완료되었어요!</h2>
            </div>
            <p>DreamLand에서 만나요!</p>
            <div>
                <div>
                    <ul className="names-reserve">
                        <li>예약번호</li>
                        <li>예약일</li>
                        <li>예약시간</li>
                        <li>결제 금액</li>
                        <li>주차 위치</li>
                    </ul>
                    <ul className="saved-reserve">
                        <li>{year}{month}{date}</li>
                        <li>{reserveDate}</li>
                        <li>예약시간</li>
                        <li>결제 금액</li>
                        <li>주차 위치</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CompleteReservation;