import axios from "axios";


export const getCoinPrices1 = (id, days) => {
    

    const prices= axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`).then((resp) => {

        console.log("priceApi" ,resp)
        return resp.data.prices;
    }).catch((e) => {
      console.log(e);

    })

    return prices;
}

export const getCoinPrices = (id, days,priceType) => {
    

    const prices= axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`).then((resp) => {

        console.log("priceApi" ,resp)
        return  resp.data[priceType];
    }).catch((e) => {
      console.log(e);

    })

    return prices;
}



