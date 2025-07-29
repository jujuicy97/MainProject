import { useEffect, useState } from "react";
import { getPaymentInfo, getUserInfo } from "../utils/LocalStorage";
import { fetchYearlyPass } from "../utils/ParkingAPI";
import { FaCreditCard, FaDotCircle, FaRegCalendarAlt, FaRegCircle } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { useNavigate } from "react-router-dom";

const ReservationPayment = ({setFinalAmount}) => {
    const navigate = useNavigate();
    const [loginID,setLoginID] = useState('');
    const [amount,setAmount] = useState(0);
    const [total,setTotal] = useState(0);
    const [yearlyPass,setYearlyPass] = useState(false);
    const [date,setDate] = useState(null);
    const [selected,setSelected] = useState('card');


    //시작하자마자 불러올 값들
    useEffect(()=>{
        const id = getUserInfo().id;
        setLoginID(id);
        const payment = getPaymentInfo();
        const krDate = new Date(payment.selectedDate).toLocaleDateString("ko-KR",{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        })
        if(payment && payment.selectedTotal){
            setAmount(payment.selectedTotal);
            setDate(krDate);

        }
    },[])

    //연간회원권 보유여부
    useEffect(()=>{
        if(!loginID) return; //id값이 없을때 진행X
        const fetchYearInfo = async ()=>{
            const { data, error } = await fetchYearlyPass(loginID);
            if(data){
                setYearlyPass(data[0].yearly_pass);
            }
            if(error){
                console.log("못찾아왔습니다");
            }
        }
        fetchYearInfo();
    },[loginID])

    //클릭된 결제방법 저장하기
    const handleSelect = (way)=>{
        setSelected(way)
    }

    //연간회원권 할인
    useEffect(()=>{
        if(!amount || !yearlyPass) return; //둘다 값이 없을때 진행X
        const finalAmount = yearlyPass ? amount*0.8 : amount;
        setTotal(finalAmount);
    },[amount,yearlyPass])
    
    //최종금액 옮겨주기
    const handlePayment = ()=>{
        setFinalAmount(total);
        const saved = JSON.stringify(total);
        localStorage.setItem("final_amount",saved);
        navigate("/")
    }
    return (
        <div id="reservation-payment">
            <div className="current-date">
                <FaRegCalendarAlt />
                <p>{date}</p>
            </div>
            <h2 className="payment-i"><FaCreditCard className="credit-i" /> 결제 수단 선택</h2>
            <div className="payment-way">
                <div className="how-to-pay">
                    <div className={`credit-check ${selected === 'card' ? 'selected' : ''}`} onClick={()=>{handleSelect('card')}}>
                        {selected === 'card' ? <FaDotCircle className="color-i" /> : <FaRegCircle className="color-i" />}
                        <FaCreditCard className="credit-i" />
                        <p>신용/체크 카드</p>
                    </div>
                    <div className={`kakao-pay ${selected === 'kakao' ? 'selected' : ''}`} onClick={()=>{handleSelect('kakao')}}>
                        {selected === 'kakao' ? <FaDotCircle className="color-i" /> : <FaRegCircle className="color-i" />}
                        <RiKakaoTalkFill className="kakao-i" />
                        <p>카카오페이</p>
                    </div>
                    <div className={`toss-pay ${selected === 'toss' ? 'selected' : ''}`} onClick={()=>{handleSelect('toss')}}>
                        {selected === 'toss' ? <FaDotCircle className="color-i" /> : <FaRegCircle className="color-i" />}
                        <p>토스페이</p>
                    </div>
                </div>
            </div>
            <div className="reserve-aware">
                <p>예약 시 주의사항</p>
                <IoIosArrowForward />
            </div>
            <div className="service-use">
                <p>서비스 이용약관</p>
                <IoIosArrowForward />
            </div>
            <p className="agree-check">위 내용을 확인했으며 결제에 동의합니다</p>
            {
                yearlyPass && (
                    <div className="year-true">
                        <WiStars />
                        <p>회원님은 연간회원권으로 <span>20%</span> 할인되었어요!</p>
                        <WiStars />
                    </div>
                )
            }
            {
                !yearlyPass && (
                    // 빈칸용
                    <div className="year-false">
                    </div>
                )
            }
            <div className="total-amount">
                <p>총 결제 금액</p>
                <h2>{total.toLocaleString()}원</h2>
            </div>
            <button 
                className="amount-pay"
                onClick={handlePayment}
            >{total.toLocaleString()}원 결제하기
            </button>
        </div>
    );
};

export default ReservationPayment;