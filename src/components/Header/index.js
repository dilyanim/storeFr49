import React from "react";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="hed-title">
            <h1>BOOKShop</h1>
          </div>
          <div className="hed-basket">
            <IoMdCart className="icon-hed" />
            <p>Корзина</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
