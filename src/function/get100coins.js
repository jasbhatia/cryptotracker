import axios from "axios";


export const get100coins = () => {
    

    const myCoins = axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').then((resp) => {
        console.log("responseee", resp);
       
    }).catch((e) => {
        console.log(e);
        
    })

    return myCoins;
}