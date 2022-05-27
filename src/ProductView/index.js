import React from "react";
import Goods from "./Goods";

class ProductView extends React.Component {
  render() {
    return (
      <div>
        <Goods name="Football" amount="98" />
      </div>
    );
  }
}

export default ProductView;
