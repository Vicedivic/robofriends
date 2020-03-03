import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <label htmlFor="search" style={{ fontSize: 0, position: "absolute" }}>Search</label>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        id="search"
      />
    </div>
  );
};

export default SearchBox;
