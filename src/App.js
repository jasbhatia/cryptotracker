
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
import WatchlistPage from './pages/WatchlistPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
           <Route path="/watchList" element={ <WatchlistPage/>} />




      </Routes>
      
      
      
      </BrowserRouter>
    </>
  );
}

export default App;
