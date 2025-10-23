import { useState } from "react";


const QuizPage = ({quiz,onFinished}) => {
  const [currentIdx,setCurrentIdx] = useState(0);
  const [score,setScore] = useState(0);
  const currentQuiz = quiz[currentIdx]
  const handelClick = (item)=>{
    //정답인지 아닌지 체크
    // if( item === currentQuiz.correct){
    //   setScore(score+10);
    // }
    const result = score + item.score;

    if(currentIdx+1 < quiz.length){
      //계속 실행 되어야 하고
      setCurrentIdx(currentIdx+1);
      setScore(result);
    }else{
      //문제 끝
      // console.log("문제내는거 끝");
      onFinished(result);
    }
  }
  return (
    <>
    <div className="quiz-question">
      <hr />
      <h3>{currentQuiz.question}</h3>
    </div>
    <div className="quiz-page">
      <p>퀴즈({currentIdx+1}/{quiz.length})</p>
      <div className="choices">
        {
        currentQuiz.choices.map((item,idx)=>{
          return <button key={idx} onClick={() => handelClick(item)}> {item.text} </button>
        })
        }
        {/* <p>점수 : {score} </p> */}
      </div>
    </div>
    </>
  );
};

export default QuizPage;