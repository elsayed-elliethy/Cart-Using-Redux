import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { manageCartActions } from "../../store/manageCartSlice";
const ProductItem = (props) => {
  const { title, price, description } = props;
  const allProducts = props.productsArray;
  const cartItems = useSelector((state) => state.add.items);
  const dispatch = useDispatch();

  const addItemHandler = (event) => {
    const [item] = allProducts.filter((ele) => {
      return ele.id === event.target.id;
    });

    dispatch(manageCartActions.addItem({ value: item }));
    // dispatch(manageCartActions.addTotalQuantity());
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler} id={props.id}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
