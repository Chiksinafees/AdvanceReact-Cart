import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartShowActions } from "../store/CartShowStore";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const CartVisibleHandler = () => {
    dispatch(cartShowActions.showCartHandler());
  };
  return (
    <button className={classes.button} onClick={CartVisibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
