import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import ScrollBtn from "./ScrollBtn";

const Foot = () => {
  return (
    <>
      <div className="footer-one">
        <h2>COMPANY INFO</h2>
        <ul>
          <li>Brand Story</li>
          <li>Contact Us</li>
          <li>지속가능성 프로젝트</li>
          <li>배송 및 반품</li>
          <li>자주 묻는 질문</li>
          <li>협업 문의</li>
        </ul>
      </div>
      <div className="footer-two">
        <h2>FOLLOW SNS</h2>
        <ul>
          <li><FiInstagram /></li>
          <li><FaFacebook /></li>
          <li><FiTwitter /></li>
        </ul>
      </div>
      <div className="footer-three">
        <p>Copyright ⓒZEROFLOW.All rights reserved.</p>
      </div>
      <ScrollBtn/>
    </>
  );
};

export default Foot;
