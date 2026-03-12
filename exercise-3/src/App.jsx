import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const handleQuantityChange = (index, amount) => {
    setOrders(orders.map((order, i) => 
      i === index ? {...order, quantity: order.quantity + amount} : order
    ));
  }

  const computeTotal = () => {
    return orders.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);
  }
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) =>(
          <OrderCard key={index} name={order.product} price={order.price} quantity={order.quantity} onQuantityChange={(amt) => handleQuantityChange(index, amt)}/>
        ))}
      </div>

      <CheckoutButton total={computeTotal()}></CheckoutButton>
    </>
  );
}
