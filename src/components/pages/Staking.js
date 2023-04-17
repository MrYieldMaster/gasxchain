import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const Staking = () => {
  const [amountToStake, setAmountToStake] = useState('');
  const [rewards, setRewards] = useState(0);
  const [estimatedEarnings, setEstimatedEarnings] = useState(0);

  const handleStake = () => {
    // Implement your staking logic here
  };

  const handleClaimRewards = () => {
    // Implement your claim rewards logic here
  };

  const handleUnstake = () => {
    // Implement your unstaking logic here
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Staking
        </Typography>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">Amount to Stake</Typography>
              <TextField
                fullWidth
                label="Amount"
                value={amountToStake}
                onChange={(e) => setAmountToStake(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Staking Rewards</Typography>
              <Typography variant="body1">{rewards} Tokens</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Estimated Earnings</Typography>
              <Typography variant="body1">{estimatedEarnings} Tokens/day</Typography>
            </Grid>
          </Grid>
          <Box mt={4} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleStake}
              sx={{ marginRight: 2 }}
            >
              Stake Tokens
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClaimRewards}
              sx={{ marginRight: 2 }}
            >
              Claim Rewards
            </Button>
            <Button variant="outlined" color="error" onClick={handleUnstake}>
              Unstake Tokens
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Staking;
