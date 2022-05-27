import "./App.css";
import SearchBar from "./SearchBar";
import ProductView from "./ProductView";

function App() {
  return (
    <div className="App">
      <div className="tableView">
        <SearchBar />
        <ProductView />
      </div>
    </div>
  );
}

export default App;
