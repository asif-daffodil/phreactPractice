import React from "react";
import useTshirts from "../../hooks/useTshirts";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
  const [tShirts, setTshirts] = useTshirts();
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 grid grid-cols-3 gap-3 p-3">
        {tShirts.map((tShirt) => (
          <Tshirt key={tShirt._id} tShirt={tShirt}></Tshirt>
        ))}
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
