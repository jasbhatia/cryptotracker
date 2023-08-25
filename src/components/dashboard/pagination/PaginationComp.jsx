import React, { useState } from 'react'

import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'

 function PaginationComp({page,handlePageChange}) {

  

  return (
   
    <div className='pagination-comp'>
    
      <Pagination count={10} page={page} onChange={(e,value)=>handlePageChange(e,value)} sx={{
        color: "var(--white)", "& .Mui-selected": {
          backgroundColor: "var(--blue) !important",
          color: "#fff !important",
          borderColor: "var(--blue) !important"
        
        }, "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important"
        }, "& .MuiPaginationItem-text": {
          color: "var(--white)",
          border:"1px solid var(--grey) ",
        }
      
      
      }} />
  </div>
  );
}

export default PaginationComp;
