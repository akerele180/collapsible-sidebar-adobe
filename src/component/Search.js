import React from 'react'
import { BiSearch } from 'react-icons/bi';
import './Search.css'

function Search() {
  return (
    <div className="search-bar">
      <input type="search" name="search" placeholder="Search"/>
      {/* <BiSearch />
      < */}
    </div>
  )
}

export default Search;