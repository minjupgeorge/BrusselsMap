import React, { useState } from "react";

export const Searchform = ({ handleResultClick,setSearchQuery}) =>

{
  return (
    <form
    onSubmit ={(e) => {
        e.preventDefault();
                handleResultClick();
    }} >

      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};