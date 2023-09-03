
import React, { useEffect, useState } from 'react'
import TabsComponent from '../components/dashboard/tabs/TabsComponent'
import Header from '../components/common/Header'
import axios from 'axios';
import Search from '../components/dashboard/search/Search';
import PaginationComp from '../components/dashboard/pagination/PaginationComp';
import Loader from '../components/common/loader/Loader';
import BackToTop from '../components/common/backTotop/BackToTop';


const WatchlistPage = () => {
const [search, setSearchValue] = useState("");
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function handlePageChange(e,value) {
    setPage(value);
    let prevIndex = (value - 1) * 10;
    setPaginatedCoins(state.slice(prevIndex,prevIndex +10))
  }
  
  
  function onSearchChange(e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
}
  let filteredCoins = state.filter((item) => {return  item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()) })
  console.log(filteredCoins);


  let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios.get(url).then((resp) => {
      console.log("responseee", resp);
      setState(resp.data);
      setPaginatedCoins(resp.data.slice(0, 10));
      setLoading(false);
    }).catch((e) => {
      console.log(e);
       setLoading(false);
    })


  },[])






  return (
    <div>
    {isLoading? <Loader/> :( <div>
      <Header />
        <Search search={search} onSearchChange={onSearchChange} />
        <div className="watchlist" style={{width:"60%", margin:"0px auto" ,paddingBottom:"5em"}}>
      <TabsComponent coin={search ? filteredCoins : paginatedCoins} />
</div>
     
     

       {/* <BackToTop/> */}
    </div >)}
    
    </div>
  )
}

export default WatchlistPage
