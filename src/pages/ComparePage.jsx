import React, { useEffect, useState} from 'react'
import Header from '../components/common/Header'
import SelectCoins from '../components/coin/selectCoins/SelectCoins'
import SelectDays from '../components/coin/selectDays/SelectDays';
import { coinObject } from '../function/coinObject';
import { getCoinPrices, getCoinPrices1 } from '../function/getCoinPrices';
import { settingCartData } from '../function/settingChartData';
import { getCoinData } from '../function/getCoinData';
import List from '../components/dashboard/list/List';
import CoinInfo from '../components/coin/CoinInfo';

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setcrypto1Data] = useState({});
  const [crypto2Data, setcrypto2Data] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");


  useEffect(() => {
    getData()
  },[])


  async function getData() {
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    console.log("dataone", data1)
     console.log("datatwo",data2)
    if (data1) {
      coinObject(setcrypto1Data,data1)
    }
    if (data2) {
        coinObject(setcrypto2Data,data2)
    }

    if (data1 && data2) {
      const priceData1 = await getCoinPrices(crypto1, days,priceType);
      const priceData2 = await getCoinPrices(crypto2, days,priceType);
if (priceData1.length > 0  && priceData2.length>0) {
        console.log("price1 and 2 fetched");
  setLoading(false);
      }

      }
  }

  function handleDaysChange(e) {
    setDays(e.target.value);
    
  }
 async function handleCoinChange(e, isCoin2) {
        
        if (isCoin2) {
          setCrypto2(e.target.value);

          const data = await getCoinData(e.target.value);
  
      coinObject(setcrypto2Data, data);
      
     
  
        } else
        {
          setCrypto1(e.target.value);
        
         const data = await getCoinData(e.target.value);
    
      coinObject(setcrypto1Data, data);
     
     }
   
   const priceData1 = await getCoinPrices(crypto1, days, priceType);
   const priceData2=await getCoinPrices(crypto2, days, priceType);
      
     
       
    }



  return (
    <div >

      <Header />
      {crypto1Data && crypto2Data && <div className="compare-page-div">
      <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} />
      
        <SelectDays days={days} handleDaysChange={handleDaysChange} noPtag={ true} />
      </div>}   
      
      {crypto1Data &&  <div className="grey-wrapper">
        <List coin={crypto1Data} style={{ marginBottom: "1em" }} />
      </div>  }
      
    {crypto2Data && <div className="grey-wrapper">
        <List coin={crypto2Data} style={{marginBottom:"1em"}} />
      </div>  }   
    {crypto1Data &&   <CoinInfo heading={crypto1Data.name}  desc={crypto1Data.desc} /> }
      {crypto2Data &&  <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc } />}
    </div>
  )
}

export default ComparePage
