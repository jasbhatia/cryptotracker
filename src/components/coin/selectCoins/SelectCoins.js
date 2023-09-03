
import  React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectCoins.css'
import { get100coins } from '../../../function/get100coins';
import axios from 'axios';
import "./SelectCoins.css";


export default function SelectCoins({crypto1,crypto2,handleCoinChange }) {
 
    
    const [allCoins, setAllCoins] = useState([]);

   
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    useEffect(() => {
    axios.get(url).then((resp) => {
      console.log("responseee", resp);
      setAllCoins(resp.data);
      
      
    }).catch((e) => {
      console.log(e);
      
    })


  },[])



  return (
    <div className="select-coins">
      
     <p>Crypto 1</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto1}
          label="Coins"
          onChange={(e)=>handleCoinChange(e)}
          sx={{
            height: "2.5rem",
            width: "8rem",
            color: "var(--white)!important",
            "& . MuiOutlinedInput-notchedOutLine": {
              borderColor: "var(--white)!important",
            },
            "&:MuiSvgIcon-root": {
              color: "var(--white)!important",
            },

            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
           
          }
          }
          >
              {allCoins && allCoins.map((coin) => { return (<MenuItem value={coin.id}>{ coin.name}</MenuItem>) })}
         
          
          </Select>
          
           <p>Crypto 2</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto2}
          label="Coins"
          onChange={(e)=>handleCoinChange(e,true)}
          sx={{
            height: "2.5rem",
            width: "8rem",
            color: "var(--white)!important",
            "& . MuiOutlinedInput-notchedOutLine": {
              borderColor: "var(--white)!important",
            },
            "&:MuiSvgIcon-root": {
              color: "var(--white)!important",
            },

            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
           
          }
          }
          >
              {allCoins && allCoins.map((coin) => { return (<MenuItem value={coin.id}>{ coin.name}</MenuItem>) })}
         
          
        </Select>
      
    </div>
  );
}
