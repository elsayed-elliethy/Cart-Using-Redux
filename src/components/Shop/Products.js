import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: "t1",
      title: "test1",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "t2",
      title: "test2",
      price: 7,
      description: "This is a second product - amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((ele) => {
          return (
            <ProductItem
              productsArray={products}
              key={ele.id}
              id={ele.id}
              title={ele.title}
              price={ele.price}
              description={ele.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
