import "./searchBar.css";
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchContainer">
        <div>
          <input className="input-field" type="text" placeholder="Search..." />
        </div>
        <div className="checkInput">
          <input type="checkbox" />
          <span>Select only products in stock</span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
