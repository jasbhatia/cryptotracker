import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Select.css'


export default function SelectDays({days,handleDaysChange,noPtag}) {
 

  

  return (
    <div className="select-days">
      
      {!noPtag &&  <p>Price Change In</p>}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
          sx={{
            height: "2.5rem",
            width: "8rem",
            color: "var(--white)",
            "& . MuiOutlinedInput-notchedOutLine": {
              borderColor: "var(--white)",
            },
            "&:MuiSvgIcon-root": {
              color: "var(--white)",
            },

            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
            " &.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
              color: "var(--white)",
            }
          }
          }
        >
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
             <MenuItem value={365}>365 Days</MenuItem>
        </Select>
      
    </div>
  );
}
