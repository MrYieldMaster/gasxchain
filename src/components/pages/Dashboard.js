import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
} from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { formatEther } from '@ethersproject/units';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const injected = new InjectedConnector({ supportedChainIds: [56] }); // Update with your supported chain IDs

const Dashboard = () => {
  const { active, activate, deactivate, account, library } = useWeb3React();
  const [balance, setBalance] = useState(0);
  const [chartData, setChartData] = useState([]);
  // Replace with your own data for latest transactions and latest blocks
  const [latestTransactions, setLatestTransactions] = useState([]);
  const [latestBlocks, setLatestBlocks] = useState([]);

  const handleClick = async () => {
    if (!active) {
      try {
        await activate(injected);
      } catch (error) {
        console.error('Failed to connect:', error);
        alert('Failed to connect. Please try again.')
      }
    } else {
      deactivate();
    }
  };

  useEffect(() => {
    const fetchBalance = async () => {
      if (active && account && library) {
        const balance = await library.getBalance(account);
        setBalance(formatEther(balance));
      } else {
        setBalance(0);
      }
    };
    fetchBalance();
  }, [active, account, library]);

  // Replace this with your own logic to fetch chart data, latest transactions, and latest blocks
  useEffect(() => {
    const fetchData = async () => {
      // Fetch chart data
      setChartData([
        { timestamp: 'Jan', value: 10 },
        { timestamp: 'Feb', value: 15 },
        { timestamp: 'Mar', value: 20 },
        { timestamp: 'Apr', value: 10 },
      ]);

      // Fetch latest transactions
      setLatestTransactions([
        { hash: '0x...', from: '0x...', to: '0x...', value: '0.5 ETH' },
        { hash: '0x...', from: '0x...', to: '0x...', value: '1.0 ETH' },
      ]);

      // Fetch latest blocks
      setLatestBlocks([{ number: 1 }, { number: 2 }, { number: 3 }]);
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to HyperGas Dashboard
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
          {active ? 'Disconnect Wallet' : 'Connect Wallet'}
        </Button>
        {active && (
          <Box mt={4}>
            <Paper elevation={3} sx={{ padding: 4 }}>
              <Typography variant="h6">Account Information</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography>Account Address:</Typography>
                  <Typography>{account}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>Account Balance:</Typography>
                  <Typography>{balance} ETH</Typography>
                </Grid>
              </Grid>
            </Paper>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Chart
              </Typography>
              <LineChart width={600} height={300} data={chartData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </Box>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Latest Transactions
              </Typography>
              {latestTransactions.map((tx, index) => (
                <Paper key={index} elevation={2} sx={{ padding: 2, mb: 1 }}>
                  <Typography>
                    Hash: {tx.hash} | From: {tx.from} | To: {tx.to} | Value:{' '}
                    {tx.value}
                  </Typography>
                </Paper>
              ))}
            </Box>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Latest Blocks
              </Typography>
              {latestBlocks.map((block, index) => (
                <Paper key={index} elevation={2} sx={{ padding: 2, mb: 1 }}>
                  <Typography>Block Number: {block.number}</Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;

