
import { useNavigate } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa";

const HeaderMobile = () => {
  const navigate = useNavigate();
  return (
    <nav id="top-navbar">
      <div className="navbar-container">
        <div className="arrow-icon" onClick={() => navigate('/')}>   {/* 뒤로가기 네비게이터 설정 */}
          <FaCaretLeft />
        </div>
        <p className="page-name">
          예약하기
        </p>
      </div>

    </nav>
  );
};

export default HeaderMobile;