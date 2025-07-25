import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { HiTicket } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";

const BottomNavBarMobile = () => {
  const navigate = useNavigate();
  return (
    <nav id="bottom-navbar">
      <div className="navbar-container">
        <div className="icon active" onClick={() => navigate('/')}>
          <TiHome />
        </div>
        <div className="icon" onClick={() => navigate('/')}>
          <FaCar />
        </div>
        <div className="icon" onClick={() => navigate('/')}>
          <HiTicket />
        </div>
        <div className="icon" onClick={() => navigate('/')}>
          <HiInformationCircle />
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBarMobile;