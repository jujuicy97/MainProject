import "./quiz.scss";
import { useState } from "react";
//컴포넌트
import quizData from "./data/quizData"
import Categoris from "./Components/Categoris";
import QuizPage from "./Components/QuizPage";
import Results from "./Components/Results";

const App = () => {
  // console.log(quizData.categoris);
  const [category,setCategory] = useState("");

  //quizData에서 저축, 투자, 대출, 보험별로 각각 불러와야함
  const [filterQuiz,setFilterQuiz] = useState([]);
  const [finished,setFinished] = useState(false);
  const [score,setScore] = useState(0);
  //자식한테 보내져야 함
  const onSelectCategory = (select)=>{
    setCategory(select);
  
  const quizArr = quizData.quizzes.filter((data)=>{
    return data.category === select;
  });
  setFilterQuiz(quizArr);
}
  const handelFinish = (score)=>{
    setFinished(true);
    setScore(score);
  }

  //끝났을 때 자식에게 보낼 함수
  const handelRestart = ()=>{
    setCategory("");
    setFinished(false);
  }

  return (
    <div className={`app ${!category && !finished ? "is-initial" : ""}`}>
      { !category &&  !finished &&   //카테고리가 없으면 categories만 보여지고, finished도 
      <Categoris categoris={quizData.categories}
      //자식한테 보내는 함수 ↓
                onSelect={onSelectCategory}
                />
      }
          {
          //카테고리가 있으면 퀴즈 페이지가 보여지게
            category && !finished && (<QuizPage quiz={filterQuiz} onFinished={handelFinish} />)
          }
          {
            finished && (<Results onRestart={handelRestart} appScore={score}/>)
          }
          </div>
  );
};

export default App;
