import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { manageCartActions } from "../../store/manageCartSlice";
const CartItem = (props) => {
  const { title, quantity, price, id } = props;
  const cartItems = useSelector((state) => state.add.items);
  const total = price * quantity;

  const dispatch = useDispatch();
  const addItemHandler = (event) => {
    const [item] = cartItems.filter((ele) => {
      return ele.id === event.target.id;
    });
    dispatch(manageCartActions.addItem({ value: item }));
  };
  const removeItemHandler = (event) => {
    const [item] = cartItems.filter((ele) => {
      return ele.id === event.target.id;
    });
    dispatch(manageCartActions.removeItem({ value: item }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler} id={id}>
            -
          </button>
          <button onClick={addItemHandler} id={id}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
