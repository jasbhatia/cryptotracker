import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import '../grid/Grid.css'
import './List.css';
import Tooltip from '@mui/material/Tooltip';
import { convertNumber } from '../../../function/convertNumber';
import { Link } from 'react-router-dom';


const List = ({coin}) => {
  return (
     <Link to={`/coin/${coin.id}`}>
    <div>
          <tr className='list-row'>
              <Tooltip title="Logo Image" placement="bottom-start">
                <td className="td-image">
              
              <img src={coin.image} alt="loading.." className='coin-logo' />
                  </td>
                  </Tooltip>
                  <td>
                      
                  <div className="name-col">
                  <p className='coin-symbol'>{coin.symbol}</p>
                  <p className='coin-name'>{coin.name }</p>
              </div>
              </td>
              <td>
                    <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
      {coin.price_change_percentage_24h.toFixed(2)>0 ? (<div className='chip-flex'>
        <div className="price-chip">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
       <div className='trend-icon td-icon'><TrendingUpRoundedIcon/></div> 

      </div>) : (<div className='chip-flex '>
        <div className="price-chip chip-red ">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
         <div className='trend-icon chip-red td-icon'><TrendingDownRoundedIcon/></div> 
      </div>)
      
      
                      }
                      </Tooltip>
      </td>     
              <td>
                  <Tooltip title="Current Price" placement="bottom">
        <h3 style={{color: coin.price_change_percentage_24h.toFixed(2)>0 ?"var(--green)" : "var(--red)"}} className="td-price-center">{ coin.current_price
                          .toLocaleString()}</h3>
                      </Tooltip>
                  </td>
<td>
        <p className='total-volume td-right td-vol' > ${coin.total_volume.toLocaleString()
        }</p>
              </td> 
              <td>
        <p className='total-volume td-right desktop-mrkt-cap'>${coin.market_cap.toLocaleString()
 }</p>
              </td>
              
               <td className='mobile-mrkt-cap'>
        <p className='total-volume td-right'>${convertNumber(coin.market_cap) 
 }</p>
</td>


      </tr>
      </div>
      </Link>
  )
}

export default List
