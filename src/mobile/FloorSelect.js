import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { fetchAllZoneStatus, fetchParkArea } from "../utils/ParkingAPI";
import { Navigate, useNavigate } from "react-router-dom";

const FloorSelect = () => {
  const [zoneStatus, setZoneStatus] = useState({});
  const [selectedZone, setSelectedZone] = useState(""); //구역 정보 관리(A,B,C,D)
  const [selectedZoneSeats, setSelectedZoneSeats] = useState([]); //해당 구역 자리 정보 배열
  const zones = ["A", "B", "C", "D"]; //구역 선택용 배열
  const navigate = useNavigate();

  //1. 구역별 정보를 가져오는 함수(자리보여주기)
  const listArea = async (zone) => {
    setSelectedZone(zone);
    const { data, error } = await fetchParkArea(zone);
    if (error) {
      alert("주차 자리 정보 불러오기 실패");
      setSelectedZoneSeats([]);
      return;
    }
    setSelectedZoneSeats(data);
  };

  //2. 잔여석을 가져와서 zoneStatus에 저장(완료)
  useEffect(() => {
    const loadZoneStatus = async () => {
      const result = await fetchAllZoneStatus(); //잔여석 가져옴
      setZoneStatus(result);
    };
    loadZoneStatus();
  }, []);

  //3. ParkingSelect 페이지로 넘어가는 버튼 함수
  const nextbtn = () => {
    //만약에 구역이 선택이 안되면
    if (!selectedZone) {
      alert("구역을 선택해주세요");
      return;
    }
    navigate("/parkingSelect", {
      state: { selectedZone, selectedZoneSeats }, //현재 지정된 상태로 넘기기
    });
  };

  //4. 구역 선택 후 다음 버튼을 누르면 ParkingSelect에 정보를 넘기기

  return (
    <div className="floor-select">

      <div className="top-benner">

        <div className="top-wrap">
          <div className="top1">
            <FaRegCalendarAlt />
            <p>^날짜기능^2025년 7월 24일 목요일</p>
          </div>
          <div className="top2">
            <FaMapMarkerAlt />
            <h2>이용 구역 선택</h2>
          </div>
        </div>

        <p>사전 결제 ZONE</p>

        {/* //zones 배열 abcd를 순회하며 list로 받아옴*/}
        <div className="zone-wrap">
        {zones.map((list) => {
          //상태 변수 : 각 배열 정보가 담김(아직 데이터가 없으면 0처리)
          const status = zoneStatus[list] || {
            total: 0,
            reserved: 0,
            available: 0,
          };
          return (

            <ul className="zone-select" >
              {/* 버튼을 클릭하면 해당 구역의 정보(배열)가 불러와지고, 총수와 잔여석 표기 */}
              <li
                key={list}
                onClick={() => { listArea(list) }}>
                <div><span>{list}</span>구역</div> 
                <div>
                  <p>잔여석<span>{status.available}</span>/25</p>
                  <p>●여유</p>
                </div>
              </li>
            </ul>
          );
        })}
        </div>

        <div className="price-notice"></div>
        <button className="next-btn" onClick={nextbtn}>
          다음으로
        </button>
      </div>
    </div>
  );
};

export default FloorSelect;
