import React from 'react'
import './Grid.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

const Grid = ({coin,key}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className={`grid-container ${coin.price_change_percentage_24h.toFixed(2)<=0 && "grid-container-red"}`}>
          <div className="info">
              
              <img src={coin.image} alt="loading.." className='coin-logo' />

              <div className="name-col">
                  <p className='coin-symbol'>{coin.symbol}</p>
                  <p className='coin-name'>{coin.name }</p>
              </div>
      </div>
      {coin.price_change_percentage_24h.toFixed(2)>0 ? (<div className='chip-flex'>
        <div className="price-chip">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
       <div className='trend-icon'><TrendingUpRoundedIcon/></div> 

      </div>) : (<div className='chip-flex '>
        <div className="price-chip chip-red">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
         <div className='trend-icon chip-red'><TrendingDownRoundedIcon/></div> 
      </div>)
      
      
      }
      
      <div className="price-info">
        <h3 style={{color: coin.price_change_percentage_24h.toFixed(2)>0 ?"var(--green)" : "var(--red)"}}>{ coin.current_price
.toLocaleString()}</h3>

        <p className='total-volume'>Total Volume: {coin.total_volume.toLocaleString()
        }</p>
        
        <p className='total-volume'>Market Cap: {coin.market_cap.toLocaleString()
 }</p>
</div>
      
      </div>
      </Link>
  )
}

export default Grid
