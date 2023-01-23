import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartItemAction } from "../store/Cart-ItemsStore";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, totalPrice, price, id } = props.item;

  const incItemHandler = () => {
    dispatch(
      cartItemAction.addItemHandler({
        title,
        quantity,
        totalPrice,
        price,
        id,
      })
    );
  };

  const decItemHandler = () => {
    dispatch(cartItemAction.removeItemHandler(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decItemHandler}>-</button>
          <button onClick={incItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
