import  React,{useState} from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./TogglePrice.css";

export default function TogglePrice({priceType,handlePriceTypeChange}) {
  console.log("priceType in TogglePrice:", priceType);

  return (
    <ToggleButtonGroup
      value={priceType}
      exclusive
          onChange={(e,newType)=>handlePriceTypeChange(e,newType)}
          sx={{
              "&.Mui-Selected": {
                  color: "var(--blue)!important",
              },
              borderColor: "var(--blue)",
              border: "unset !important",
              "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid !important",
                  borderColor: "unset",
                  color: "var(--blue)",
              },

              "& .MuiToggleButton-standard": {
                  color:"var(--blue)",
              }
          
          
          
          
          }}
          className="price-toggle"
      
    >
      <ToggleButton value="prices" >
     Price
      </ToggleButton>
      <ToggleButton value="market_caps" >
        Market_Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" >
       Total_Volume
      </ToggleButton>
     
    </ToggleButtonGroup>
  );
}