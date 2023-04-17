import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/pages/Dashboard';
import Wallet from './components/pages/Wallet';
import Transactions from './components/pages/Transactions';
import Staking from './components/pages/Staking';
import NFTMarketplace from './components/pages/NFTMarketplace';
import TokenSwap from './components/pages/TokenSwap';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <nav>
        {/* Add navigation links using the Link component */}
        <Link to="/">Dashboard</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/staking">Staking</Link>
        <Link to="/nft-marketplace">NFT Marketplace</Link>
        <Link to="/token-swap">Token Swap</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/nft-marketplace" element={<NFTMarketplace />} />
        <Route path="/token-swap" element={<TokenSwap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;