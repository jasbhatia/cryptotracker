import { convertDate } from "./convertDate"

export const settingCartData = (setChartData,priceData) => {
      setChartData({
  labels:priceData.map(price => convertDate(price[0])),
  datasets: [{
      label: 'Dataset 1',
    data: priceData.map(price => price[1]),
    fill: true,
    borderColor: '#3ae089',
    tension: 0.25,
    backgroundColor: 'rgba(58,128,233,0.1)',
    
  }]
}
          
        )
          
        
      }
    
