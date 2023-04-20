import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/pages/Dashboard';
import Wallet from './components/pages/Wallet';
import Transactions from './components/pages/Transactions';
import Staking from './components/pages/Staking';
import NFTMarketplace from './components/pages/NFTMarketplace';
import TokenSwap from './components/pages/TokenSwap';
import Homepage from './components/pages/Homepage';

function App() {
  const getLibrary = (provider) => {
    const library = new Web3(provider);
    library.pollingInterval = 12000;
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <CssBaseline />
        <Header />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/nft-marketplace" element={<NFTMarketplace />} />
          <Route path="/token-swap" element={<TokenSwap />} />
        </Routes>
        <Footer />
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
 
