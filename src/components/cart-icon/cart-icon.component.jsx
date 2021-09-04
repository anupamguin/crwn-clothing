import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// const mapDispatchToProps = (dispatch) => ({
//   toogleCartHidden: () => dispatch(toogleCartHidden()),
// });

const mapDispatchToProps = {
  toogleCartHidden,
};

const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
