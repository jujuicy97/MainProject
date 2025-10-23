import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const style = {
    cursor: "pointer",
  };
  // 데스크탑 사이즈면 자동으로 메뉴 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1048) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header>
      <Menu isOpen={isOpen} className="menu" />
      {isOpen && (
        <div className="dimmed-bg" onClick={() => setIsOpen(false)}></div>
      )}
      <div className="head">
        <div className="left">
          <IoMdMenu
            className="menu-btn"
            style={style}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <img
            onClick={() => {
              navigate("/");
            }}
            src={`${process.env.PUBLIC_URL}/images/logo-01.png`}
            alt="zero flow 초록 색상 로고"
          />
        </div>
        <div
          className="cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <FaShoppingCart />
          <p>CART</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
