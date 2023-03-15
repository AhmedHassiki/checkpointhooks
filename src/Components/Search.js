import React from "react";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

const Search = ({ search, setRate }) => {
  const onStarClick = (event, newValue) => {
    setRate(newValue);
  };

  return (
    <div>
      <div className="topnav">
        <div className="searchtxt">
          <input
            onChange={(e) => search(e.target.value)}
            type="text"
            placeholder="Search.."
            className="ser"
          />
        </div>
        <div>
          <Typography component="legend">Filter by rating:</Typography>
          <Rating name="search-rating" onChange={onStarClick} />
        </div>
      </div>
    </div>
  );
};

export default Search;
