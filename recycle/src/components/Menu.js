
const Menu = ({ isOpen }) => {
  return (
    <nav className={isOpen ? "mobile-open" : ""}>
      <div className="menu-wrapper">
        <ul className="menu">
          <li className="menu-name">
            <p>Brand Story</p>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu-name">
            <p>Shop</p>
            <ul className="submenu">
              <li>paper</li>
              <li>plastic</li>
              <li>reusable</li>
            </ul>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu-name">
            <p>Project</p>
            <ul className="submenu">
              <li>recycle</li>
            </ul>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu-name">
            <p>Community</p>
            <ul className="submenu">
              <li>배송 및 반품</li>
              <li>자주 묻는 질문</li>
              <li>문의하기</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
