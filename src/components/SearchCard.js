import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

function SearchCard() {
  let searchResult;
  let searchResultList = [];

  function handleSearch(e) {
    e.preventDefault();

    let searchItem = e.target[0].value;
    let searchItemLower = searchItem.toLowerCase();
    // let searchItemUpper = searchItem[0].toUpperCase() + searchItem[1, -1]
    console.log(searchItem, searchItemLower);

    if (localStorage.getItem(searchItem) !== null) {
      searchResult = localStorage.getItem(searchItem);
      console.log(searchResult);
    } else if (localStorage.getItem(searchItemLower) !== null) {
      searchResult = localStorage.getItem(searchItemLower);
    } else {
      alert("Not found");
    }

    let parsedSearchResult = JSON.parse(searchResult);
    console.log("This is searchResult JSON.parse", parsedSearchResult);

    searchResultList.push(parsedSearchResult);
    console.log("This is list of results:", searchResultList);

    e.target[0].value = "";
  }

  console.log(searchResultList)

  return (
    <div>
      <SearchBar handleSearch={handleSearch} searchResultList={searchResultList} />

      <div>
     
        <p>This is the result: {searchResultList} </p>
        {/* <ul style={{ listStyle: "none" }}>
          {searchResultList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul> */}
      </div>
    </div>
  );
}

export default SearchCard;