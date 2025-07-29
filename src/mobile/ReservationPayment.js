import { useEffect, useState } from "react";
import { getPaymentInfo, getUserInfo, savePaymentInfo } from "../utils/LocalStorage";
import { fetchYearlyPass } from "../utils/ParkingAPI";

const ReservationPayment = () => {
    const [loginID,setLoginID] = useState('');
    const [amount,setAmount] = useState(0);
    const [yearlyPass,setYearlyPass] = useState(false);
    const [day,setDay] = useState(null);
    const fetchYearInfo = async ()=>{
        const { data, error } = await fetchYearlyPass(loginID);
        if(data){
            setYearlyPass(data.yearly_pass);
        }
        if(error){
            console.log("못가져왔습니다.")
        }
    }
    useEffect(()=>{
        setLoginID(getUserInfo().id);
        if(loginID){
            fetchYearInfo();
        }
    },[])
    const handlePayment = (e)=>{
        e.preventDefault();
    }
    console.log(yearlyPass)
    return (
        <div id="reservation-payment">
            <p className="current-date"></p>
            <h2>결제 수단 선택</h2>
            <div>
                <div>
                    <div>
                        <button>◎</button>
                        <p>신용/체크 카드</p>
                    </div>
                    <div>
                        <button>◎</button>
                        <p>카카오페이</p>
                    </div>
                    <div>
                        <button>◎</button>
                        <p>토스페이</p>
                    </div>
                </div>
                <div>
                    <p>예약 시 주의사항</p>
                    <span>＞</span>
                </div>
                <div>
                    <p>서비스 이용약관</p>
                    <span>＞</span>
                </div>
                <p className="agree-check">위 내용을 확인했으며 결제에 동의합니다</p>
                {
                    yearlyPass && (
                        <div className="year-true">
                            <p>회원님은 연간회원권으로 <span>20%</span> 할인되었어요!</p>
                        </div>
                    )
                }
                <div>
                    <p>총 결제 금액</p>
                    <h2></h2>
                </div>
                <button 
                    className="amount-pay"
                    onClick={handlePayment}
                >
                    원 결제하기
                </button>
            </div>
        </div>
    );
};

export default ReservationPayment;