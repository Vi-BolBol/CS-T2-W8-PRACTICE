import { useState } from "react";

export default function StuffForm( {Add}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || isNaN(parseFloat(price))) return;
    Add(name, parseFloat(price));
  }

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="search" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>

      <button>Add Stuff</button>
    </form>
  );
}
