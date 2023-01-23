import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartShowActions } from "../store/CartShowStore";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((prevState) => prevState.cart.totalQuantity);

  const CartVisibleHandler = () => {
    dispatch(cartShowActions.showCartHandler());
  };
  return (
    <button className={classes.button} onClick={CartVisibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
