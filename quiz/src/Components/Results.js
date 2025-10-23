
const Results = ({onRestart,appScore}) => {
  let resultText = "";

  if(appScore >= 17){
    resultText =  "스트레스가 높은 편이에요. 조금 더 관리가 필요해요.";
  }else if(appScore >= 13){
    resultText = "스트레스가 조금 있어요. 관리가 필요해요.";
  }else if(appScore >= 9){
    resultText = "적당한 스트레스가 있지만 잘 관리하고 있어요.";
  }else {
    resultText = "당신은 스트레스 관리가 잘 되는 편이에요!";
  }

  return (
    <div className="result">
      <p>퀴즈종료</p>
      <p>최종점수 : <span>{appScore}점</span></p>
      <p>{resultText}</p>
      <button onClick={()=>{onRestart()}}>다시 시작하기</button>
    </div>
  );
};

export default Results;