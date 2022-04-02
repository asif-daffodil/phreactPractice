import React from "react";

const Tshirt = (props) => {
  const { name, picture, price } = props.tShirt;
  return (
    <div className="border-2 rounded-lg p-3 shadow-lg flex justify-center flex-col">
      <img src={picture} alt="" className="h-80" />
      <h4 className="text-center text-3xl">{name}</h4>
      <p className="text-center my-2">Price : ${price}</p>
      <button className="border-2 py-2 w-3/4 m-auto hover:bg-black hover:text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default Tshirt;
