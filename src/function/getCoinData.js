import axios from "axios";



export const getCoinData = (id) => {
    const myData=  axios.get(` https://api.coingecko.com/api/v3/coins/${id}`).then((resp) => {
        return resp.data;
    }).catch((e) => {
      console.log(e);

    })

    return myData;

}