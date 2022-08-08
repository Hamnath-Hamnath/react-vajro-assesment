import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, deleteCart } from "../redux/action/index";

function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 shadow-sm rounded-3">
        <div className="container py-5">
          <div className="row">
            <h3 className="text-center fw-bold">OOPS!! Your cart is emtpy </h3>
          </div>
        </div>
      </div>
    );
  };
  const CartItems = (cartItems) => {
    return (
      <div className="px-4 my-5 shadow-sm rounded-3" key={cartItems.id}>
        <div className="container py-4">
          
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItems.image}
                alt={cartItems.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItems.title}</h3>
              <p className="lead fw-bold">
                {cartItems.qty} X <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                {Number.parseInt(cartItems.price * 79.58)} ={" "}
                <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                {cartItems.qty * Number.parseInt(cartItems.price * 79.58)}
              </p>
              <button
                className="btn btn-outline-dark me-4 "
                onClick={() => dispatch(deleteCart(cartItems))}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => dispatch(addCart(cartItems))}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(CartItems)}
    </div>
  );
}

export default Cart;
