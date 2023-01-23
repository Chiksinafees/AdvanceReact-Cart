import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const showCart = useSelector((prevState) => prevState.cartVisible.showCart);
  const items = useSelector((prevState) => prevState.cart.items);

  return (
    <div>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {items.map((product) => (
              <CartItem
                key={product.id}
                item={{
                  id: product.id,
                  title: product.title,
                  quantity: product.quantity,
                  totalPrice: product.totalPrice,
                  price: product.price,
                }}
              />
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default Cart;
