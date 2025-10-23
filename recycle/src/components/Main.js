import { Outlet } from "react-router-dom";
import Foot from "./Footcopy";
import Header from "./Header";
import ScrollBtn from "./ScrollBtn";

//import 헤더 컴포넌트
//import 푸터 컴포넌트

const Main = () => {
  return (
    <div className="layout-wrapper">
      <header>
        {/* 실제 메뉴 컴포넌트나 네비게이션 바 삽입 */}
        <Header/>
      </header>
      <main>
        <Outlet /> {/* DetailPage 전환 자리 */}
      </main>
      <footer>
        {/* <ScrollBtn/> */}
        <Foot />
        {/* <p>공통 푸터 자리</p> */}
      </footer>
    </div>
  );
};

export default Main;