import React from 'react';
import { Container, Typography, Box, Button, Paper, Grid } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { formatEther } from '@ethersproject/units';

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] }); // Update with your supported chain IDs

const Dashboard = () => {
  const { active, activate, deactivate, account, library } = useWeb3React();

  const handleClick = async () => {
    if (!active) {
      try {
        await activate(injected);
      } catch (error) {
        console.error('Failed to connect:', error);
      }
    } else {
      deactivate();
    }
  };

  const getBalance = async () => {
    if (active && account && library) {
      const balance = await library.getBalance(account);
      return formatEther(balance);
    }
    return 0;
  };

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
                  <Typography>{getBalance()} ETH</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
