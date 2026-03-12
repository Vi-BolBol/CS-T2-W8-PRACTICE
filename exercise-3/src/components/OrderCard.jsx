import React from "react";

export default function OrderCard({name, price, quantity, onQuantityChange}) {
  return (
    <div className="order">
      <div>
        <h4>{name}</h4>
        <small>{price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" style={{backgroundColor: quantity === 0 ? "#bfbfbf" : ""}}  onClick={() => quantity > 0 && onQuantityChange(-1)}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={() => onQuantityChange(+1)}>+</div>
      </div>
    </div>
  );
}
