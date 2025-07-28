import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MainHeaderMobile = () => {
  const navigate = useNavigate();
  return (
    <nav id="top-main-navbar">
      <div className="navbar-container">
        <img
          onClick={() => navigate('/')}
          className="logo"
          src={`${process.env.PUBLIC_URL}/images/dreamland_logo1.png`}
        />

        <div className="user-info" onClick={() => navigate('/')}>
          <span>김드림님</span>
          <div className="user-icon">
            <FaUserLarge />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeaderMobile;
