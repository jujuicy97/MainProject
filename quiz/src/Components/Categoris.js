//1. 사용할 속성 import하기

const Categoris = ({categoris,onSelect}) => {
  return (
    <>
    <img src="./quiz/image/quiz-img1.png" />
    <div className="category">
      <p>어떤 주제의 심리테스트를 해볼까요?</p>
      <div className="category-wrapper">
        {
          categoris.map((item,idx)=>{
//스타일버튼은 scss파일에서 한번에 관리하기!!
            return <button className="categoryBtn" key={idx} onClick={()=>{onSelect(item)}}> {item} </button>
          })
        }
      </div>
    </div>
    </>
  );
};

export default Categoris;