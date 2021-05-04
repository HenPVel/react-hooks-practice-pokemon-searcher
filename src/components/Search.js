import React from "react";

function Search({handleFilterChange}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={e => handleFilterChange(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
