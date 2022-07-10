import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../store/cartSlice";
const CartButton = (props) => {
  const totalAmount = useSelector((state) => state.add.TotalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(showCartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
