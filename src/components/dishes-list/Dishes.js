import DishesItem from "../dishes-item/DishesItem";
import Styles from "./dishes.module.css";

function Dishes({ data }) {
  console.log(data);
  return (
    <div className="container">
        <div className={Styles.dishesCards}>
        {data.map((dish) => (
        <DishesItem key={dish.id} {...dish} />
      ))}
        </div>
    </div>
  );
}

export default Dishes;
