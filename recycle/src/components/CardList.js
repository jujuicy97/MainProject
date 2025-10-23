import Card from "./Card";
import NewItem from "../assets/new-items.json";

const CardList = ({onAddCart}) => {
  // const handleAdd = (item) => {
  //   console.log("장바구니에 담김:", item);
  // };

  return (
    <div className="card-list">
      {NewItem.map((item) => {
        return <Card key={item.id} item={item} onAdd={onAddCart} />;
      })}
    </div>
  );
};

export default CardList;