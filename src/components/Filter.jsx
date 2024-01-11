import ascending from "../assets/order-ascending.png";
import descending from "../assets/order-descending.png";
import { useState } from "react";
import "./Filter.css";

const Filter = ({ sortedRecipes, setSortedRecipes }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    let newSortedRecipes = [...sortedRecipes]; // you can't .sort sortedRecipes directly because it's a state variable
    if (sortOrder === "asc") {
      newSortedRecipes.sort(
        (a, b) => Date.parse(a.sys.createdAt) - Date.parse(b.sys.createdAt)
      );
      setSortOrder("desc");
    } else {
      newSortedRecipes.sort(
        (a, b) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt)
      );
      setSortOrder("asc");
    }
    setSortedRecipes(newSortedRecipes);
  };
  return (
    <>
      <div className="filter">
        <div className="filter-left">
          <label htmlFor="filter">Filter by</label>
          <select name="filter" id="filter">
            <option value="date">Date</option>
            {/* <option value="title">Title</option> */}
          </select>
        </div>
        <div className="filter-right">
          <label htmlFor="sortOrder">Order by</label>
          <button onClick={handleSort} className={sortOrder} id="sortOrder">
            <img
              src={sortOrder === "asc" ? ascending : descending}
              alt={sortOrder}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
