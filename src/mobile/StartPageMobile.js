const StartPageMobile = () => {
  return (
//초기 테스트(startpage 작업하시는 분이 참고 + 삭제)  
    <div className="start-page">
      <h1>시작할 때 보여지는 메인 화면</h1>
      <div className="allbtn">
        <button className="b1">예약하기</button>
        <button className="b2">주차안내</button>
        <button className="b3">내 예약 내역</button>
        <button className="b4">더 많은 정보보기</button>
      </div>
      <div className="alltxt">
        <div className="txt">
          <p>7월 21일 14:00 - 21:00 총 7시간</p>
          <p>●예약중</p>
        </div>
        <div className="txt">
          <p>7월 21일 14:00 - 21:00 총 7시간</p>
          <p>●예약취소</p>
        </div>
      </div>
    </div>
  );
};

export default StartPageMobile;
