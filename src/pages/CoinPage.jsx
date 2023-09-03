import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/common/loader/Loader';
import Header from '../components/common/Header';
import axios from 'axios';
import { coinObject } from '../function/coinObject';
import List from '../components/dashboard/list/List';
import CoinInfo from '../components/coin/CoinInfo';
import { getCoinData } from '../function/getCoinData';
import { getCoinPrices, getCoinPrices1 } from '../function/getCoinPrices';
import LineChart from '../components/coin/lineChart/LineChart';
import { convertDate } from '../function/convertDate';
import {
  Chart as ChartJS,
 LineElement,CategoryScale,LinearScale,PointElement
} from 'chart.js';
import SelectDays from '../components/coin/selectDays/SelectDays';
import { settingCartData } from '../function/settingChartData';
import TogglePrice from './togglePrice/TogglePrice';


const CoinPage = () => {
    const {id} = useParams();
  const [isLoading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartPrice, setChartPrice] = useState([]);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");
  

  const labels= ['mon','tue', 'wed', 'thr','fri']





  useEffect(() => {
    
    if (id)
    {
      getData();
    }

}, [])
  
  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      setLoading(false);
    
      const priceData = await getCoinPrices1(id, days);
      console.log("pricesDatadotPrice", priceData);

      setChartPrice(priceData);
      console.log("priceData", priceData)
      
      if (priceData.length > 0) {
        console.log("doneeeeeeeeeeeeeeeeeeeee");
        // const labels = priceData.map(price => convertDate(price[0]));
        //   console.log("arrrrrrr", labels);

        setChartData({
          labels: priceData.map((price) => convertDate(price[0])),
          
          datasets: [{
            data: priceData.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: true,
            tension: 0.25,
            backgroundColor: "rgba(58,128,233,0.1)",
            pointRadius:0,
            
}]

        })

      }
    }
    }

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const priceData = await getCoinPrices(id, event.target.value,priceType);
    if (priceData.length > 0) {
      settingCartData (setChartData, priceData);
      setLoading(false);
    }

  };

 

  const handlePriceTypeChange = async(e, newType) => {
     setLoading(true);
    setPriceType(newType);
    console.log("typechaneeeeeTypeeee", newType);
    const priceData = await getCoinPrices(id, days, newType);
     console.log("priceeeedataType",priceData)
     if (priceData.length > 0) {
       settingCartData(setChartData, priceData);
       console.log("priceeee",priceData)
      
    }
    setLoading(false);
  };




  return (
    <div>
      <Header/>
      {isLoading ? <Loader /> :
        <div className='grey-wrapper'>
          <List coin={coinData} />
        </div>}
      
       <div className="grey-wrapper">
        
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
        <TogglePrice priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
        <LineChart data={chartData} />
      </div>
      


      
      {coinData &&
        <CoinInfo heading={coinData.name} desc={coinData.desc} />}
      

      
    </div>
    
  )
}

export default CoinPage
