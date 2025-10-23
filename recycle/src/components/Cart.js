import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import items from '../assets/new-items.json';
import { useEffect } from "react";

const Cart = ({ cart, onDelete, onIncrease, onDecrease }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="cart-page">
      <h2>My CART</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>쇼핑카트가 비었습니다</h3>
          <p>지구를 위한 착한 소비를 시작해보세요</p>
          <button
            className="home"
            onClick={() => {
              navigate("/");
            }}
          >
            메인페이지로 이동
          </button>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => {
              const matchedItem = items.find((el) => el.id === item.id);
              return (
                <li key={item.id}>
                  <img
                    src={`${process.env.PUBLIC_URL}${matchedItem?.image}`}
                    alt={item.title}
                  />
                  <div className="item-info">
                    <h4>{item.title}</h4>
                    <h3>{item.price.toLocaleString()} 원</h3>
                    <div className="count-control">
                      <span>수량 : {item.count}</span>
                      <button onClick={() => onDecrease(item.id)}>-</button>
                      <button className="plus"
                      onClick={() => onIncrease(item.id)}>+</button>
                    </div>
                  </div>
                  <p
                    className="item-icon"
                    onClick={() => {
                      onDelete(item.id);
                    }}
                  >
                    <RiDeleteBinLine />
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="cart-summary">
            <div className="summary-price">
              <p>총 결제 금액 : </p>
              <h3>{totalPrice.toLocaleString()} 원</h3>
            </div>
            <button>주문하기</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
