import React, { useState } from 'react';
import './CoinInfo.css';


const CoinInfo = ({ heading, desc }) => {
    const [flag, setFlag] = useState(false);


    const shortDesc = desc.slice(0, 200) + "<p style='color:var(--grey)'>  Read More.... </p>";

    const longDesc = desc + "<p style='color:var(--grey)'>  Read Less.... </p>";



  return (
    <div className='grey-wrapper'>
          <h2 className='coin-info-heading'>{heading}</h2>

          {desc.length>200 ? (<p onClick={()=>{setFlag(!flag)} } className='coin-info-desc' dangerouslySetInnerHTML={{ __html: !flag? shortDesc : longDesc }} ></p>) : (<p className='coin-info-desc' dangerouslySetInnerHTML={{ __html: desc}}></p>)}
          
    </div>
  )
}

export default CoinInfo
