import React from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({search,onSearchChange}) => {
  return (
      <div className='search-flex'>
          <SearchIcon/>
      <input placeholder='Search' type='text' onChange={(e)=>{onSearchChange(e)}}/>
    </div>
  )
}

export default Search
