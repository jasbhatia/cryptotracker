import React, { useState} from 'react'
import Header from '../components/common/Header'
import SelectCoins from '../components/coin/selectCoins/SelectCoins'
import SelectDays from '../components/coin/selectDays/SelectDays';

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);

  function handleDaysChange(e) {
    setDays(e.target.value);
    
  }
  return (
    <div >

      <Header />
      <div className="compare-page-div">
      <SelectCoins crypto1={crypto1} crypto2={crypto2} setCrypto1={setCrypto1} setCrypto2={setCrypto2} />
      
        <SelectDays days={days} handleDaysChange={handleDaysChange} noPtag={ true} />
        </div>
    </div>
  )
}

export default ComparePage
