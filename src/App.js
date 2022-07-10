import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import useHttp from "./hooks/use-http";
import styles from "./components/Layout/Notifications.module.css";
import { useState } from "react";
import { manageCartActions } from "./store/manageCartSlice";

function App() {
  const [showNotification, setShowNotification] = useState(false);
  const showCart = useSelector((state) => {
    return state.cart.show;
  });
  const cart = useSelector((state) => {
    return state.add;
  });

  /////////////

  const { isLoading, error, requestFn: sendData } = useHttp();
  useEffect(() => {
    if (!cart.changed) {
      return;
    }
    const submitFn = () => {
      setShowNotification(true);
    };
    sendData(
      {
        url: "https://food-e7d7c-default-rtdb.firebaseio.com/cart.json",
        method: "PUT",
        body: cart,
        headers: {
          "Content-Type": "application/json",
        },
      },
      submitFn
    );
  }, [sendData, cart]);

  ///////////

  const dispatch = useDispatch();
  const {
    isLoading: loadingForFetch,
    error: errorDuringFetch,
    requestFn: getData,
  } = useHttp();

  useEffect(() => {
    const submitFn = (data) => {
      dispatch(
        manageCartActions.replaceCart({
          items: data.items,
          totalQuantity: data.TotalQuantity,
        })
      );
      console.log(data.items, "dddddd");
    };
    getData(
      {
        url: "https://food-e7d7c-default-rtdb.firebaseio.com/cart.json",
      },
      submitFn
    );
  }, [getData, dispatch]);

  ///////////
  let content;

  if (error) {
    content = (
      <div className={styles.error}>
        <h2>Failed!</h2>
        <p>Something went wrong!</p>
      </div>
    );
  }
  if (isLoading) {
    content = (
      <div className={styles.loading}>
        <h2>Sending...</h2>
      </div>
    );
  }
  if (!isLoading && !error && showNotification) {
    content = (
      <div className={styles.success}>
        <h2>Success!</h2>
        <p>Send Cart Data Successfully</p>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={styles.notification}>{content}</div>

      {/* <div className={styles.notification}>{content}</div> */}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
