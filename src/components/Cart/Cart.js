import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import { manageCartActions } from "../../store/manageCartSlice";
import React, { Component } from "react";

const Cart = (props) => {
  const cartItems = useSelector((state) => {
    return state.add.items;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((ele) => {
          return (
            <CartItem
              key={ele.id}
              id={ele.id}
              title={ele.title}
              quantity={ele.quantity}
              price={ele.price}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
