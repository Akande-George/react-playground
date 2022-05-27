import React from "react";
import "./goods.css";

export default class Goods extends React.Component {
  render() {
    return (
      <div className="flex justify-between border mt-6 p-2">
        <div>{this.props.name}</div>
        <div className="">${this.props.amount}</div>
      </div>
    );
  }
}
