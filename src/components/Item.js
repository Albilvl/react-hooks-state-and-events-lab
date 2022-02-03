import React, {useState} from "react";


function Item({ name, category }) {
  const [isCart, setIsCart] = useState(true)
  function handleClick(){
    setIsCart(isCart=> !isCart)
  }
  const cartName = isCart ? "" : "in-cart"
  return (
    <li className= {cartName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"  onClick={handleClick}>{isCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
